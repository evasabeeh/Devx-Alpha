const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function makeUserAdmin(email) {
    try {
        const user = await prisma.user.update({
            where: { email },
            data: { role: "admin" },
        });

        console.log(`✅ User ${email} is now an admin!`);
        console.log(`User ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Role: ${user.role}`);
    } catch (error) {
        if (error.code === "P2025") {
            console.log(`❌ User with email ${email} not found`);
        } else {
            console.error("❌ Error making user admin:", error);
        }
    } finally {
        await prisma.$disconnect();
    }
}

// Get email from command line arguments
const email = process.argv[2];

if (!email) {
    console.log("Usage: node scripts/make-admin.js <email>");
    console.log("Example: node scripts/make-admin.js user@example.com");
    process.exit(1);
}

makeUserAdmin(email);
