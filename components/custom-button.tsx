import { cn } from "@/lib/utils";

interface CustomButtonProps {
  text: string;
  containerStyles?: string;
}

export const CustomButton = ({ text, containerStyles }: CustomButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "group relative overflow-hidden bg-accent uppercase cursor-pointer",
        containerStyles
      )}
    >
      <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32" />
      <span className="ease relative text-white transition duration-300 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};
