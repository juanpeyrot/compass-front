export const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <p className="text-green-500">{message}</p>
    </div>
  );
};
