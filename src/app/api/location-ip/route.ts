import { headers } from 'next/headers';
import { logger } from "@/utils/logger";
import { NextRequest, NextResponse } from "next/server";
import { env } from '@/config/environment';

interface ApiResponse {
    ip: string;
    country_code: string;
    country_name: string;
    region_name: string;
    city_name: string;
    latitude: number;
    longitude: number;
    zip_code: string;
    time_zone: string;
    asn: string;
    as: string;
    is_proxy: boolean;
}

export async function POST(req: NextRequest) {
    const apiUrl = `https://api.ip2location.io/?key=${env.IP2LOCATION_KEY}&ip=`;
    const body = await req.json();
    const ip_address = body.ip_address;

    if (!ip_address) {
        return NextResponse.json({ message: "Ip not provided" }, { status: 400 });
    }

    try {
        const response = await fetch(`${apiUrl}${ip_address}`);

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const data: ApiResponse = await response.json();

        return NextResponse.json({ data }, { status: 200 });

    } catch (error) {
        logger.error("Error fetching API: ", error);
        return NextResponse.json({ message: "Something went wrong", error: error }, { status: 500 });
    }
}
