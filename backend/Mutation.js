const Mutation = {
    async createUser(parent, args, ctx, info) {
        const { name, email, password } = args;
        console.log(args)
        const user = await ctx.db.mutation.createUser({
            data: {
                name,
                email,
                password
            }
        }, info)
        return user;
    }
}
module.exports = Mutation;
