import { ChatBubbleLeftRightIcon, ClockIcon, ChartBarIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Conversational AI on WhatsApp',
    description: 'Chat with Tabsi directly in WhatsApp – no new apps, no learning curve.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Automate Business Tasks',
    description: 'Reminders, notes, and daily summaries – all automated for you.',
    icon: ClockIcon,
  },
  {
    name: 'Insights & Analytics',
    description: 'Get actionable insights about sales, customers, and operations, right in chat.',
    icon: ChartBarIcon,
  },
  {
    name: 'Mobile-First & Secure',
    description: 'Built for small businesses on the go. Your data stays private and secure.',
    icon: DevicePhoneMobileIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 max-w-4xl mx-auto">
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Why Tabsi?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <feature.icon className="h-10 w-10 text-emerald-600 mb-4" />
            <h4 className="text-lg font-semibold mb-2">{feature.name}</h4>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
