import Bull from "bull";
import emailProcess from "src/processes/email.process";
import { setQueues, BullAdapter } from "bull-board";

const emailQueue = new Bull("email", {
  redis: { host: "localhost", port: 6379 },
});

setQueues([new BullAdapter(emailQueue)]);

emailQueue.process(emailProcess);

export const sendNewEmail = async (data: any) => {
  // Creates a new job and adds it to the queue.
  emailQueue.add(data, {
    attempts: 5,
  });
};
