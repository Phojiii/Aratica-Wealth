// src/app/api/news/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(
      'https://Business-News-Daily.proxy-production.allthingsdev.co/api/news',
      {
        headers: {
          'x-apihub-key': 'Eq5mAR7AJHQEie2BToSq-uySVp948uoq3R0KadnYRlO0krsmhx',
          'x-apihub-host': 'Business-News-Daily.allthingsdev.co',
          'x-apihub-endpoint': '2a95520f-14a3-47ec-a91d-3449d76b9016',
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}
