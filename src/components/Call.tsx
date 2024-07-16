import {
  AgoraRTCProvider,
  LocalVideoTrack,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers
} from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";

function Call(props: { appId: string, channelName: string }) {
  const client = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }));

  return (
    <AgoraRTCProvider client={client}>
      <Videos channelName={props.channelName} AppID={props.appId}  />
      <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center pb-4">
        <a className="px-5 py-3 text-base font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40" href="/">End Call</a>
      </div>
    </AgoraRTCProvider>
  );
}

function Videos(props: { channelName: string; AppID: string; }) {
  const { AppID, channelName } = props;
  const { isLoading: isLoadingMic, localMicrophoneTrack } = useLocalMicrophoneTrack();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);

  usePublish([localMicrophoneTrack, localCameraTrack]);
  useJoin({
    appid: AppID,
    channel: channelName,
    token: null,
  });

  audioTracks.map((track) => track.play());
  const deviceLoading = isLoadingMic || isLoadingCam;
  if (deviceLoading) return <div className="flex flex-col items-center pt-40">Loading devices...</div>;

  const totalParticipants = remoteUsers.length + 1;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {totalParticipants === 1 ? (
        <LocalVideoTrack track={localCameraTrack} play={true} className="w-full h-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 w-full h-full">
            {remoteUsers.length > 0 && (
              <RemoteUser user={remoteUsers[0]} className="w-full h-full object-cover" />
            )}
          </div>
          <div className="absolute bottom-4 right-4 w-1/5 h-1/5 z-10">
            <LocalVideoTrack 
              track={localCameraTrack} 
              play={true} 
              className="w-full h-full object-cover rounded-lg shadow-lg" 
            />
          </div>
        </>
      )}
    </div>
  );
}


export default Call;