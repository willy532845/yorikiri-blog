export function FriendAvatar({
  link,
  fallback,
  ...props
}: {
  link: string;
  fallback: string;
}) {
  return (
    <img
      src={link}
      alt="網站logo"
      className="h-28 w-28 shrink-0 overflow-hidden rounded-lg bg-zinc-200 object-cover dark:bg-zinc-900"
      {...props}
    />
  );
}
