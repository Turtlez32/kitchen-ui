import Link from "next/link";
import { useCallback } from "react";
import useWebSocket, {ReadyState} from "react-use-websocket";
import { api ,HydrateClient } from "~/trpc/server";

export default async function Home() {
  const data = await api.post.status();
  const seat = await api.post.seating();
  const payload = {
    lang: "en_us",
    service: "runtime",
  }
  // const socketUrl = "ws://10.0.44.144:8082/ws/home/overview";
  // const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  // const handleClickSendMessage = useCallback(() => sendMessage(JSON.stringify(payload)), []);
  //const power = await api.post.power();
  //console.log(power);

  return (
    <HydrateClient> 
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Server Room Information</h3>
              <div className="text-lg">
                  <h1>
                    Temperature: {data.temp.temperature}
                    Pressure: {data.temp.pressure}
                    Humidity: {data.temp.humidity}
                  </h1>
              </div>
              <h3 className="text-2xl font-bold">Seat Near Kitchen</h3>
              <div className="text-lg">
                  <h1>
                    {seat}
                  </h1>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
