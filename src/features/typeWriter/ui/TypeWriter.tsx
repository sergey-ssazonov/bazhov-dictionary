"use client";

import Typewriter from "typewriter-effect";

const phrases: string[] = [
  "Абы — лишь бы, только бы.",
  "Прошенье написать, пробу смыть, знаки оглядеть асе.",
  "По совести, не по лукавству.",
  "Времени отпущено — не в долг, а в счёт.",
  "Сделал — не хвались, не сделал — не оправдывайся.",
  "Не словами сильны, а делом верны.",
  "Не всякая тропа ведёт к свету, да вся оставляет след.",
  "Мыслю чисто — значит делаю прочно.",
  "Начал — не забудь, зачем начал.",
  "Прежде понять, потом решить, после — отвечать.",
];

const TypewriterBlock = () => {
  return (
    <div className="text-[32px] font-semibold ">
      <Typewriter
        options={{
          strings: phrases,
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 40,
          cursor: "|",
        }}
      />
    </div>
  );
};
export default TypewriterBlock;
