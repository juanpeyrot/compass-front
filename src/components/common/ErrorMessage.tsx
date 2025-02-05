export const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <p className="text-red-500">{error}</p>
    </div>
  );
};
