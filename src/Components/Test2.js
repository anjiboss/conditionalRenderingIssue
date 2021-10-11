import Message from "./Message";

const messageData = [
  {
    text: "check",
    createdAt: "2021-10-08T12:45:35.208Z",
    from: { username: "admin" },
  },
  {
    text: "why",
    createdAt: "2021-10-08T12:45:38.960Z",
    from: { username: "admin" },
  },
  {
    text: "whyyyyyyyyyyyyyyyyyyyyy",
    createdAt: "2021-10-08T12:45:46.278Z",
    from: { username: "admin" },
  },
  {
    text: "ha?",
    createdAt: "2021-10-09T12:45:46.278Z",
    from: { username: "admin" },
  },
  {
    text: "hey",
    createdAt: "2021-10-11T03:30:49.548Z",
    from: { username: "admin" },
  },
  {
    text: "hey",
    createdAt: "2021-10-11T03:31:06.450Z",
    from: { username: "admin" },
  },
  {
    text: "you gub?",
    createdAt: "2021-10-11T03:31:13.048Z",
    from: { username: "admin" },
  },
  {
    text: "hey what?",
    createdAt: "2021-10-11T03:31:20.503Z",
    from: { username: "admin" },
  },
  {
    text: "hey",
    createdAt: "2021-10-11T03:32:01.302Z",
    from: { username: "admin" },
  },
];
let currentDate = 0;
const Test2 = () => {
  return (
    <>
      {messageData.map((message, index) => {
        if (message.createdAt.slice(0, 10) !== currentDate) {
          currentDate = message.createdAt.slice(0, 10);
          console.log("why?", message.text);
          return (
            <div key={index} className="date">
              {currentDate}
              <Message message={message} />
            </div>
          );
        }
        return <Message key={index} message={message} />;
      })}
    </>
  );
};
export default Test2;
