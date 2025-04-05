const Error = ({ message = "Something went wrong", onRetry }) => {
  const handleRetry = async () => {
    await onRetry();
  };

  return (
    <div className="flex flex-col items-center justify-center col-span-10 h-[calc(100vh-3.5rem)] py-6">
      <div className="w-36">
        <img
          className="h-full w-full object-cover"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf9ac836-210c-4613-8adf-4ebae9216190/dguuuei-f4b81e05-051b-4690-b498-107588bb18a4.png/v1/fill/w_816,h_979/youtube_error_342___cadet_us___by_laufu2737_dguuuei-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwMCIsInBhdGgiOiJcL2ZcL2JmOWFjODM2LTIxMGMtNDYxMy04YWRmLTRlYmFlOTIxNjE5MFwvZGd1dXVlaS1mNGI4MWUwNS0wNTFiLTQ2OTAtYjQ5OC0xMDc1ODhiYjE4YTQucG5nIiwid2lkdGgiOiI8PTE1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MaJcSQQFm6oyCodC_1SAMITFdo3MQ2DPKucse__P8FE"
          alt="illustration"
        />
      </div>
      <p className="text-xl font-semibold text-red-500">
        Oops! Something went wrong.
      </p>
      <p className="text-sm text-light-text-muted dark:text-dark-text-secondary my-2">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={handleRetry}
          className="mt-2 bg-light-background dark:bg-dark-background dark:hover:bg-dark-elevated transition-colors duration-300 text-light-primary dark:text-dark-primary border border-light-border dark:border-dark-border rounded-full px-4 py-1.5"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;
