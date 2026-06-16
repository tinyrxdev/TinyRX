import { Router } from "express";
import { db, waitlistTable } from "@workspace/db";
import { JoinWaitlistBody } from "@workspace/api-zod";

const router = Router();

router.post("/waitlist", async (req, res) => {
  const parsed = JoinWaitlistBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(422).json({ error: "Invalid email" });
    return;
  }

  const { email } = parsed.data;

  try {
    const [entry] = await db
      .insert(waitlistTable)
      .values({ email })
      .returning();

    res.status(201).json({
      id: entry.id,
      email: entry.email,
      createdAt: entry.createdAt.toISOString(),
    });
  } catch (err: unknown) {
    const pgErr = err as { code?: string };
    if (pgErr?.code === "23505") {
      res.status(409).json({ error: "Email already registered" });
      return;
    }
    req.log.error({ err }, "Failed to insert waitlist entry");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
