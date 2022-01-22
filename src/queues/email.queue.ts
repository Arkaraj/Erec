import Bull from "bull";

const emailQueue = new Bull("email", {
  redis: { host: "localhost", port: 6379 },
});

export const sendNewEmail = async (data: any) => {
  // Creates a new job and adds it to the queue.
  emailQueue.add(data, {
    attempts: 5,
  });
};
