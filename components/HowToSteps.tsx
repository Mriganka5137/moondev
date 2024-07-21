import { twMerge } from "tailwind-merge";

const colorMap = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  violet: "bg-violet-500",
  yellow: "bg-yellow-500",
};

const steps = [
  {
    title: "Enter Prompt",
    description: "Describe your desired post",
    color: "blue",
  },
  {
    title: "AI Generates",
    description: "AI creates tailored content",
    color: "green",
  },
  {
    title: "Review & Edit",
    description: "Customize the post",
    color: "violet",
  },
  { title: "Save Post", description: "Store in spreadsheet", color: "yellow" },
];

export const HowToSteps = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container">
    {steps.map((step, index) => (
      <StepCard key={index} step={step} index={index + 1} />
    ))}
  </div>
);

const StepCard = ({
  step,
  index,
}: {
  step: { title: string; description: string; color: string };
  index: number;
}) => (
  <div className="border border-zinc-700 p-4 rounded-lg bg-zinc-800/50 shadow-sm flex flex-col items-center text-center h-40">
    <div
      className={twMerge(
        "rounded-full w-8 h-8 flex items-center justify-center mb-2",
        colorMap[step.color as keyof typeof colorMap]
      )}
    >
      <span className="text-white font-bold text-xs">{index}</span>
    </div>
    <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
    <p className="text-xs text-zinc-400">{step.description}</p>
  </div>
);
