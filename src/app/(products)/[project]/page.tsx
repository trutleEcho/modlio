import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {GridBackground} from "@/components/animated-background";
import {Download, ExternalLink} from "lucide-react";

export default async function ProjectPage({
                                              params,
                                          }: {
    params: Promise<{ project: string }>;
}) {
    const { project } = await params;

    // Example projects (can later be fetched from API/DB)
    const projectData = [
        {
            id: 1,
            name: "Arogyam",
            description:
                "Arogyam is a cloud-based IaaS platform designed for healthcare providers. It helps doctors and clinics streamline appointment scheduling, patient records, and CRM operations with secure, scalable infrastructure.",
            image: "/globe.png",
            demoUrl: "https://arogyam-iota.vercel.app/Arogyam-Demo.apk", // you can replace with an actual file
            liveUrl: "https://arogyam-iota.vercel.app/", // link to your deployed product
            services: [
                {
                    name: "Appointment Management",
                    description:
                        "Efficiently manage patient appointments with automated reminders, cancellations, and rescheduling options.",
                    features: [
                        "Online booking for patients",
                        "Automated SMS/Email reminders",
                        "Calendar integration (Google/Outlook)",
                        "Multi-clinic scheduling",
                    ],
                },
                {
                    name: "Patient CRM",
                    description:
                        "Maintain complete patient history, contact details, and interaction logs to enhance engagement and trust.",
                    features: [
                        "Centralized patient records",
                        "Medical history & prescriptions",
                        "Secure document storage",
                        "Communication logs",
                    ],
                },
                {
                    name: "Analytics & Reports",
                    description:
                        "Track clinic performance, doctor efficiency, and patient satisfaction with powerful analytics.",
                    features: [
                        "Revenue & billing insights",
                        "Daily/Monthly appointment trends",
                        "Patient feedback analysis",
                        "Customizable dashboards",
                    ],
                },
                {
                    name: "Security & Compliance",
                    description:
                        "Enterprise-grade security to protect patient data, compliant with healthcare regulations.",
                    features: [
                        "End-to-end encryption",
                        "Role-based access control",
                        "HIPAA/GDPR compliance",
                        "Daily automated backups",
                    ],
                },
            ],
        },
    ];

    const currentProject = projectData.find((item) => item.name === project);

    if (!currentProject) {
        notFound();
    }

    return (
        <main className="max-w-5xl mx-auto px-6 py-10">
            <GridBackground/>

            {/* Back Button */}
            <Link
                href="/"
                className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
                ← Go Back
            </Link>

            {/* Header Section */}
            <section className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">{currentProject.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{currentProject.description}</p>
                <Image
                    src={currentProject.image}
                    alt={currentProject.name}
                    width={800}
                    height={400}
                    className="rounded-2xl shadow-lg mx-auto"
                />

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                    {/* Visit Now */}
                    <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-4"
                    >
                        <ExternalLink/>
                        Visit Now
                    </a>

                    {/* Download Demo */}
                    <a
                        href={currentProject.demoUrl}
                        download
                        className="px-6 py-3 rounded-xl border border-gray-200 text-white hover:bg-green-700/50 hover:border-none transition flex items-center gap-4"
                    >
                        <Download/>
                        Download Demo
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentProject.services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-secondary p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                        >
                            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
