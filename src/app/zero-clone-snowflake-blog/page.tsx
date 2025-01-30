"use client";

import Footer from "app/component/Footer";
import Navbar from "app/component/Navbar";
import { motion } from "framer-motion";

import {
  Copy,
  Zap,
  DollarSign,
  Share2,
  Layers,
  GitBranch,
  ShieldCheckIcon,
  BarChart3Icon,
  UsersIcon,
  LayersIcon,
  ClockIcon,
} from "lucide-react";

export default function SnowflakeZeroCopyCloning() {
  const features = [
    {
      icon: <Copy className="w-6 h-6" />,
      title: "Zero Copy Cloning",
      description:
        "Create fully functional copies of databases, schemas, or tables without physically duplicating data.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Cloning",
      description:
        "Create clones in seconds, regardless of the size of the dataset.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Efficiency",
      description:
        "No additional storage is required until changes are made to the cloned data.",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Data Sharing",
      description:
        "Easily share data across teams without interference or duplication.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Flexible Cloning",
      description:
        "Clone at database, schema, or table level based on specific needs.",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Data Versioning",
      description:
        "Create snapshots of data at specific points in time for versioning and backups.",
    },
  ];

  const sections = [
    {
      title: "Introduction to Zero Copy Cloning",
      content: `Zero Copy Cloning in Snowflake allows users to create fully functional copies of databases, schemas, or tables without physically duplicating the underlying data. This innovative approach enables users to create clones in seconds, without the need for additional storage or complex data management processes.

The concept of "zero copy" means that the cloned data remains linked to the original dataset, referencing the same data blocks rather than copying them. As a result, cloned data does not consume additional storage space until changes are made to the clone or the original data.

This technique is particularly valuable in environments where data is frequently copied for testing, sandboxing, or data sharing purposes, as it dramatically reduces storage costs and speeds up data processing.`,
    },
    {
      title: "How Zero Copy Cloning Works",
      content: `Zero Copy Cloning in Snowflake leverages a unique, metadata-driven approach that allows users to create clones without duplicating the physical data. Instead of copying actual data blocks, Snowflake's architecture creates metadata pointers that link the clone to the original dataset.

This allows the clone to reference the original data's storage blocks, achieving a "zero copy" effect until changes are made to either the original or cloned data. When a clone is created, Snowflake establishes a snapshot of the data as it exists at that specific point in time.

Both the original and the clone can then independently undergo updates, additions, or deletions. Any changes made to the clone will be tracked separately from the original, meaning that new storage is only required for modified data blocks.`,
    },
    {
      title: "Benefits of Zero Copy Cloning",
      content: `• Cost Efficiency: No additional storage is required until changes are made to the cloned data.
• Time Savings: Cloning operations are nearly instantaneous, regardless of the size of the dataset.
• Data Isolation for Testing and Development: Create isolated environments for testing without impacting the original data.
• Simplified Data Versioning and Backup: Easily create snapshots of data at specific points in time.
• Support for Collaboration and Data Sharing: Different teams can create their clones of the same dataset and work independently.
• Flexible Data Experimentation: Experiment with data transformations and analytics without affecting the original dataset.`,
    },
    {
      title: "Types of Zero Copy Cloning in Snowflake",
      content: `Snowflake offers three types of Zero Copy Cloning:

1. Database Cloning: Create an entire duplicate of a database without copying the underlying data.
2. Schema Cloning: Clone a specific schema within a database, including all of the tables, views, and objects within that schema.
3. Table Cloning: Create a copy of a single table within a schema.

Each type of cloning inherits the zero copy nature, meaning no additional storage is required unless modifications are made to the clone or the original data.`,
    },
    {
      title: "Use Cases for Zero Copy Cloning",
      content: `• Testing and Development Environments: Create test environments quickly by cloning production data.
• Sandboxing for Data Experimentation: Data scientists can use clones to experiment without impacting the original data.
• Data Versioning and Historical Snapshots: Create point-in-time snapshots of data for version control and compliance.
• Training and Demo Environments: Create realistic training environments with actual data.
• Data Sharing Across Teams: Facilitate secure, isolated data sharing between departments or project teams.
• A/B Testing and Performance Analysis: Perform A/B testing by creating separate environments with identical data.
• Disaster Recovery and Backup Testing: Simulate disaster recovery scenarios or test backups without risking data loss.`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white px-8 py-48 sm:py-16 md:py-48 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-red-500"
            >
              Zero Copy Cloning in Snowflake
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Revolutionizing data management with efficient, cost-effective
              cloning
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + 0.2 * index }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-red-400">
                {section.title}
              </h2>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="prose prose-invert max-w-none">
                  {section.content.split("\n").map((paragraph, i) => (
                    <p key={i} className="text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center bg-gray-800/50 border border-gray-700 rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Why Choose Ignited Minds Learning for Snowflake Training?
            </h2>
            <p className="text-gray-300 mb-6">
              Ignited Minds Learning, the best institute in Yelahanka, offers
              comprehensive Snowflake training designed for aspiring data
              professionals. As the best Snowflake course training institute in
              Yelahanka, we provide:
            </p>
            <ul className="text-left text-gray-300 mb-8 space-y-2">
              <li className="flex items-center">
                <UsersIcon className="w-5 h-5 mr-2 text-cyan-400" />
                Expert-Led Training: Learn from experienced instructors with
                industry expertise.
              </li>
              <li className="flex items-center">
                <LayersIcon className="w-5 h-5 mr-2 text-cyan-400" />
                Hands-On Practice: Real-world projects to build practical
                skills.
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-cyan-400" />
                Certification Guidance: Assistance with SnowPro certification
                preparation.
              </li>
              <li className="flex items-center">
                <BarChart3Icon className="w-5 h-5 mr-2 text-cyan-400" />
                Placement Support: Lifetime career support to help you land your
                dream job.
              </li>
              <li className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-cyan-400" />
                Flexible Learning: Access recorded sessions and attend free demo
                classes.
              </li>
            </ul>
            <button className="bg-gradient-to-r from-red-500 to-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:from-red-600 hover:to-cyan-600 transition duration-300">
              Enroll Today!
            </button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
