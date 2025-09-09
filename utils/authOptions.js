import Google from 'next-auth/providers/google';
import GoogelProvider from 'next-auth/providers/google';
import connectDB from '@/config/database';
import User from '@/models/User';
import { use } from 'react';

export const authOptions = {
    providers: [
        GoogelProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        //invoked on successful singn in 
        async signIn({ profile }) {
            //1. connect to database
            await connectDB();
            //2. check if user exists
            const userExists = await User.findOne({ email: profile.email });
            //3. if not then user to database
            if (!userExists) {
                const username = profile.name.slice(0, 20);
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
                })
            }
            return true;
            //4.
        },
        async session({ session }) {
            const user = await User.findOne({ email: session.user.email });
            session.user.id = use._id.toString
            return session;
        }
    }
}