import React, { forwardRef, ForwardedRef, HTMLAttributes, Ref } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  textarea?: boolean;
}

const Input = forwardRef(function Input({ label, textarea, ...props }: InputProps, ref: Ref<HTMLTextAreaElement>) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500 ">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} ref={ref} {...props} />
      ) : (
        <input className={classes} ref={ref as Ref<HTMLInputElement>} {...props} />
      )}
    </p>
  );
});

export default Input;
