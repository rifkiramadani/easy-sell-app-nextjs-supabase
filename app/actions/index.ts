"use server"

export const sellYourItemsAction = async (prevState: unknown, formData: FormData) => {
    console.log(formData.get('name'))

    // const result = Player.safeParse({ username: 42, xp: "100" });
    // if (!result.success) {
    //     result.error;   // ZodError instance
    // } else {
    //     result.data;    // { username: string; xp: number }
    // }
}