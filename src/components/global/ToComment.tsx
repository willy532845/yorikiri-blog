import { MessageCircleMoreIcon } from "@ui/animated/message-circle-more";
import { Button } from "@ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui/tooltip";

export const ToCommentButton = ({ className }: { className?: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <>
          {/* 電腦版回頂端按鈕 */}
          <Button
            id="to-comment-button"
            aria-label="Jump to comments"
            variant={"ghost"}
            className={`hidden backdrop-blur-md lg:block ${className}`}
            asChild
          >
            <MessageCircleMoreIcon
              size={20}
              className="text-white lg:rotate-90"
            />
          </Button>

          {/* 手機版回頂端按鈕 */}
          <Button
            id="to-comment-button-mobile"
            aria-label="Jump to comments"
            variant={"outline"}
            className={`block backdrop-blur-md lg:hidden ${className}`}
            asChild
          >
            <MessageCircleMoreIcon
              size={20}
              className="text-white lg:rotate-90"
            />
          </Button>
        </>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>前往留言區</p>
      </TooltipContent>
    </Tooltip>
  );
};
