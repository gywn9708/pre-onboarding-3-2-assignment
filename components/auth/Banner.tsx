import React from 'react';

export default function Banner({ message }: { message: string }) {
  return (
    <div className="text-sm text-orange-400 self-center mt-2">{message}</div>
  );
}
