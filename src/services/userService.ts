// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getUserMembershipDate(_email: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2025-06-09T17:30:00");
    }, 300);
  });
}
