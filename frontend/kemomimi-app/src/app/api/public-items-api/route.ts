import { NextResponse } from "next/server";

export async function GET() {
  const publicItems = [
    {
      public_item_id: "1",
      name: "KEMOMIMI",
      cost: 3000000,
      category: {
        category_id: "1",
        name: "KEMOMIMI",
        remarks: "KAWAII"
      },
      approval_date: "2025-01-01",
      expiration_date: "2026-01-01",
      is_remaining: true,
      main_user: {
        user_id: "string",
        handle_name: "KEMO",
        screen_name: "string",
        slack_id: "string",
        is_admin: true,
        is_member: true,
        graduation_date: "2019-08-24",
        remarks: "string"
      },
      remarks: "なまもの",
    },
    {
      public_item_id: "2",
      name: "PC",
      cost: 334,
      category: {
        category_id: "1",
        name: "KEMOMIMI",
        remarks: "KAWAII"
      },
      approval_date: "2025-01-01",
      expiration_date: "2028-01-01",
      is_remaining: true,
      main_user: {
        user_id: "string",
        handle_name: "SEIGETSU",
        screen_name: "string",
        slack_id: "string",
        is_admin: true,
        is_member: true,
        graduation_date: "2019-08-24",
        remarks: "string"
      },
      remarks: "AHOKUSA",
    },
  ];

  return NextResponse.json(publicItems);
}
