import { Lightbulb, TrendingDown, BarChart2, MessageSquare } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function FounderStory() {
  const problems = [
    { icon: TrendingDown, text: "Sales drops" },
    { icon: BarChart2, text: "Refund spikes" },
    { icon: MessageSquare, text: "1-star reviews" },
  ];

  const oldFocus = [
    "Star ratings",
    "Surface-level sentiment",
    "Dashboards without explanation",
  ];

  return (
    <Section id="founder-story" background="gradient">
      <Container size="md">
        <div className="text-center mb-6">
          <Badge icon={Lightbulb} className="mb-6">
            FOUNDER STORY
          </Badge>
          
          <Heading level={2} align="center" className="mb-6">
            Why Webmerce Analytics <span className="heading-gradient">Exists</span>
          </Heading>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {/* The Problem */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">The Recurring Problem</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
              Webmerce Analytics was created after observing a recurring problem across e-commerce brands:
            </p>
            
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 font-medium">
              Teams reacted to:
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                    <Icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{problem.text}</span>
                  </div>
                );
              })}
            </div>
            
            <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 font-semibold">
              But trust erosion started months earlier.
            </p>
          </div>

          {/* Old Approach */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-white">The Old Approach</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
              Most tools focused on:
            </p>
            <ul className="space-y-3">
              {oldFocus.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-1">✗</span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-brand p-8 sm:p-10 rounded-2xl shadow-2xl text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-medium mb-4">The Harder Question</h3>
            <p className="text-lg sm:text-xl mb-2">
              Webmerce Analytics was built to answer a harder question:
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
              &quot;When does customer trust start to break, and how can teams act before it becomes expensive?&quot;
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
