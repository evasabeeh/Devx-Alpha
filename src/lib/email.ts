import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
    secure: false,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
});

export async function sendVerificationEmail(email: string, token: string) {
    const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Verify your email address - DevX Alpha",
        html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #cb1919; margin: 0;">DevX Alpha</h1>
          <p style="color: #666; margin: 5px 0;">This is the start of something good</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h2 style="color: #333; margin-top: 0;">Verify Your Email Address</h2>
          <p style="color: #666; line-height: 1.6;">
            Thank you for signing up with DevX Alpha! To complete your registration and access all features, 
            please verify your email address by clicking the button below.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" 
               style="background: #cb1919; color: white; padding: 12px 30px; text-decoration: none; 
                      border-radius: 25px; display: inline-block; font-weight: bold;">
              Verify Email Address
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px; line-height: 1.6;">
            If the button doesn't work, you can also copy and paste this link into your browser:
            <br>
            <a href="${verificationUrl}" style="color: #cb1919; word-break: break-all;">
              ${verificationUrl}
            </a>
          </p>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This verification link will expire in 24 hours. If you didn't create an account with DevX Alpha, 
            you can safely ignore this email.
          </p>
        </div>
        
        <div style="text-align: center; color: #999; font-size: 12px;">
          <p>© 2025 DevX Alpha. All rights reserved.</p>
        </div>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending verification email:", error);
        return { success: false, error };
    }
}

export async function sendPasswordResetEmail(email: string, token: string) {
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Reset your password - DevX Alpha",
        html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #cb1919; margin: 0;">DevX Alpha</h1>
          <p style="color: #666; margin: 5px 0;">This is the start of something good</p>
        </div>

        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h2 style="color: #333; margin-top: 0;">Reset Your Password</h2>
          <p style="color: #666; line-height: 1.6;">
            We received a request to reset your password for your DevX Alpha account.
            Click the button below to create a new password.
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}"
               style="background: #cb1919; color: white; padding: 12px 30px; text-decoration: none;
                      border-radius: 25px; display: inline-block; font-weight: bold;">
              Reset Password
            </a>
          </div>

          <p style="color: #666; font-size: 14px; line-height: 1.6;">
            If the button doesn't work, you can also copy and paste this link into your browser:
            <br>
            <a href="${resetUrl}" style="color: #cb1919; word-break: break-all;">
              ${resetUrl}
            </a>
          </p>

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This password reset link will expire in 1 hour. If you didn't request a password reset,
            you can safely ignore this email.
          </p>
        </div>

        <div style="text-align: center; color: #999; font-size: 12px;">
          <p>© 2025 DevX Alpha. All rights reserved.</p>
        </div>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending password reset email:", error);
        return { success: false, error };
    }
}

// Job Application Email Functions
interface JobApplicationData {
    firstName: string;
    lastName: string;
    email: string;
    jobTitle: string;
    jobDepartment: string;
    jobLocation: string;
}

export async function sendApplicationConfirmationEmail(
    applicationData: JobApplicationData
) {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: applicationData.email,
        subject: `Application Received - ${applicationData.jobTitle} at DevX Alpha`,
        html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #cb1919; margin: 0;">DevX Alpha</h1>
          <p style="color: #666; margin: 5px 0;">This is the start of something good</p>
        </div>

        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h2 style="color: #333; margin-top: 0;">Application Received!</h2>
          <p style="color: #666; line-height: 1.6;">
            Dear ${applicationData.firstName} ${applicationData.lastName},
          </p>
          <p style="color: #666; line-height: 1.6;">
            Thank you for your interest in joining DevX Alpha! We have successfully received your application for the
            <strong>${applicationData.jobTitle}</strong> position in our ${applicationData.jobDepartment} department
            (${applicationData.jobLocation}).
          </p>

          <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #cb1919;">
            <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
            <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
              <li>Our hiring team will review your application</li>
              <li>We'll contact you within 5-7 business days</li>
              <li>You'll receive updates via email as your application progresses</li>
            </ul>
          </div>

          <p style="color: #666; line-height: 1.6;">
            We appreciate the time you've taken to apply and look forward to learning more about you.
            If you have any questions, feel free to reach out to our HR team.
          </p>

          <p style="color: #666; line-height: 1.6;">
            Best regards,<br>
            <strong>The DevX Alpha Team</strong>
          </p>
        </div>

        <div style="text-align: center; color: #999; font-size: 12px;">
          <p>© 2025 DevX Alpha. All rights reserved.</p>
        </div>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending application confirmation email:", error);
        return { success: false, error };
    }
}

interface StatusChangeData extends JobApplicationData {
    status: string;
    adminNotes?: string;
}

export async function sendApplicationStatusEmail(statusData: StatusChangeData) {
    const statusMessages = {
        pending: {
            subject: "Application Under Review",
            title: "Application Under Review",
            message:
                "Your application is currently being reviewed by our team.",
            color: "#f59e0b",
        },
        reviewing: {
            subject: "Application Being Reviewed",
            title: "We're Reviewing Your Application",
            message:
                "Great news! Your application has moved to the review stage. Our team is carefully evaluating your qualifications.",
            color: "#3b82f6",
        },
        shortlisted: {
            subject: "You've Been Shortlisted!",
            title: "Congratulations! You've Been Shortlisted",
            message:
                "Excellent news! You've been shortlisted for the next stage of our hiring process. We'll be in touch soon with next steps.",
            color: "#10b981",
        },
        rejected: {
            subject: "Application Update",
            title: "Thank You for Your Interest",
            message:
                "Thank you for your interest in DevX Alpha. While we were impressed with your background, we've decided to move forward with other candidates at this time. We encourage you to apply for future opportunities that match your skills.",
            color: "#6b7280",
        },
        hired: {
            subject: "Welcome to DevX Alpha!",
            title: "🎉 Welcome to the Team!",
            message:
                "Congratulations! We're thrilled to offer you the position. Welcome to DevX Alpha! Our HR team will be in touch with next steps and onboarding information.",
            color: "#059669",
        },
    };

    const statusInfo =
        statusMessages[statusData.status as keyof typeof statusMessages] ||
        statusMessages.pending;

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: statusData.email,
        subject: `${statusInfo.subject} - ${statusData.jobTitle} at DevX Alpha`,
        html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #cb1919; margin: 0;">DevX Alpha</h1>
          <p style="color: #666; margin: 5px 0;">This is the start of something good</p>
        </div>

        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h2 style="color: ${statusInfo.color}; margin-top: 0;">${statusInfo.title}</h2>
          <p style="color: #666; line-height: 1.6;">
            Dear ${statusData.firstName} ${statusData.lastName},
          </p>
          <p style="color: #666; line-height: 1.6;">
            We have an update regarding your application for the <strong>${statusData.jobTitle}</strong>
            position in our ${statusData.jobDepartment} department.
          </p>

          <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid ${statusInfo.color};">
            <p style="color: #333; line-height: 1.6; margin: 0;">
              ${statusInfo.message}
            </p>
            ${
                statusData.adminNotes
                    ? `
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
              <p style="color: #666; font-size: 14px; margin: 0;"><strong>Additional Notes:</strong></p>
              <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 5px 0 0 0;">${statusData.adminNotes}</p>
            </div>
            `
                    : ""
            }
          </div>

          ${
              statusData.status === "hired"
                  ? `
          <p style="color: #666; line-height: 1.6;">
            We're excited to have you join our team! Our HR department will contact you within the next 24-48 hours
            with detailed information about your start date, onboarding process, and next steps.
          </p>
          `
                  : statusData.status === "shortlisted"
                    ? `
          <p style="color: #666; line-height: 1.6;">
            We'll be in touch soon with details about the next steps in our interview process.
            Thank you for your continued interest in DevX Alpha.
          </p>
          `
                    : statusData.status === "rejected"
                      ? `
          <p style="color: #666; line-height: 1.6;">
            We truly appreciate the time and effort you put into your application. We'll keep your information
            on file and encourage you to apply for future positions that align with your experience.
          </p>
          `
                      : `
          <p style="color: #666; line-height: 1.6;">
            We'll continue to keep you updated as your application progresses through our hiring process.
          </p>
          `
          }

          <p style="color: #666; line-height: 1.6;">
            Best regards,<br>
            <strong>The DevX Alpha Team</strong>
          </p>
        </div>

        <div style="text-align: center; color: #999; font-size: 12px;">
          <p>© 2025 DevX Alpha. All rights reserved.</p>
        </div>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending application status email:", error);
        return { success: false, error };
    }
}

export async function sendNewApplicationNotificationToAdmin(
    applicationData: JobApplicationData
) {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_FROM;

    if (!adminEmail) {
        console.warn(
            "No admin email configured for new application notifications"
        );
        return { success: false, error: "No admin email configured" };
    }

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: adminEmail,
        subject: `New Job Application - ${applicationData.jobTitle}`,
        html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #cb1919; margin: 0;">DevX Alpha</h1>
          <p style="color: #666; margin: 5px 0;">Admin Notification</p>
        </div>

        <div style="background: #f9f9f9; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h2 style="color: #333; margin-top: 0;">New Job Application Received</h2>

          <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Application Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Position:</td>
                <td style="padding: 8px 0; color: #333;">${applicationData.jobTitle}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Department:</td>
                <td style="padding: 8px 0; color: #333;">${applicationData.jobDepartment}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Location:</td>
                <td style="padding: 8px 0; color: #333;">${applicationData.jobLocation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Applicant:</td>
                <td style="padding: 8px 0; color: #333;">${applicationData.firstName} ${applicationData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${applicationData.email}</td>
              </tr>
            </table>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXTAUTH_URL}/admin/applications"
               style="background: #cb1919; color: white; padding: 12px 30px; text-decoration: none;
                      border-radius: 25px; display: inline-block; font-weight: bold;">
              Review Application
            </a>
          </div>

          <p style="color: #666; font-size: 14px; line-height: 1.6;">
            Please log in to the admin panel to review the full application, including the candidate's resume and cover letter.
          </p>
        </div>

        <div style="text-align: center; color: #999; font-size: 12px;">
          <p>© 2025 DevX Alpha. All rights reserved.</p>
        </div>
      </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending admin notification email:", error);
        return { success: false, error };
    }
}
