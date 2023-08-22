import { NextRequest, NextResponse } from "next/server";
import React from "react";
import mongoose from "mongoose";
import Message from "../../../../models/Message";

export async function POST(req: NextRequest, res: NextResponse) {
    const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.q5gefju.mongodb.net/`;

    let client;

    try {
        client = await mongoose.connect(MONGODB_URI);
        console.log('DB connected')

    }
    catch (error) {
        console.log('There was an error connection to the DB', error)
    }

    const data = await req.json();
    const { name, email, company, message } = data;

    if (!name || !email || !company || !message || !email.includes("@") || message.trim() === "" || name.trim() === "") {
        NextResponse.json(
            { message: "Invalid input - fill all the fields" },
            { status: 422, });
        return;
    }

    const newData = {
        ...data,
        date: new Date(),
    };

    try {
        await Message.create(newData);
        return NextResponse.json(
            { message: "Message sent" },
            { status: 201, }
        );
    }
    catch (error) {
        return NextResponse.json(
            { message: "Error sending the message" },
            { status: 500, }
        );
    }

}
