import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// 初始化Prisma客户端实例
const prisma = new PrismaClient();

// 获取所有项目的GET请求处理函数
// 使用Prisma的findMany()方法查询数据库中的所有项目
// 成功时返回项目列表，失败时返回500错误
export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// 创建新项目的POST请求处理函数
// 从请求体中获取项目数据，使用Prisma的create()方法创建新项目
// 成功时返回创建的项目，失败时返回500错误
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const project = await prisma.project.create({
      data: body,
    });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
