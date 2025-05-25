// components/FeaturesSection.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, ThumbsUp, CalendarDays, Users } from "lucide-react";

const features = [
  {
    title: "Raise Campus Issues",
    icon: Megaphone,
    description: "Report infrastructure, academic, or administrative concerns that matter to you.",
  },
  {
    title: "Upvote What's Important",
    icon: ThumbsUp,
    description: "Support issues raised by others and bring attention to what truly matters.",
  },
  {
    title: "Discover Events",
    icon: CalendarDays,
    description: "Stay informed about college fests, club meetups, and important announcements.",
  },
  {
    title: "Built for Students",
    icon: Users,
    description: "An open platform created by students — to empower the student voice.",
  },
];

export function FeaturedSection() {
  return (
    <section className="bg-black text-white py-20" id="features">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Key Features of CampusConnect</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="bg-zinc-900 border border-zinc-700 text-left hover:scale-105 transition-transform">
                <CardHeader className="flex flex-col items-start gap-4 p-6">
                  <Icon className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400 px-6 pb-6">{feature.description}</CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
