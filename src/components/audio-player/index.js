import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@mui/material";
import ReactPlayer from "react-player/lazy";

// import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { styled } from "@mui/material/styles";
import { usePlayer } from "../../context/playerContext";
import { previewStaticImage, convertSecondsToTime } from "../../tools";
import { staticIcons } from "../../data/data";

const AudioPlayerStyled = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "100%",
  right: "0",
  bottom: "0",
  left: 0,
  zIndex: "9999",
  minWidth: 1260,
  "& > div": {
    display: "none",
  },
  "& > span.play_controller": {
    zIndex: 10,

    height: 50,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: theme.palette.backgroundColors.playerControl,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    "& > span.main_controls": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      "& > span.control_icon": {
        "& > img": {
          width: 20,
          userSelect: "none",
        },
        margin: "0px 10px 0px 10px",
        cursor: "pointer",
      },
      "& > span.control_icon_pause": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 6,
        width: 40,
        backgroundColor: theme.palette.primary.lighter,
        boxShadow: "0px 4.2119px 9.47677px rgba(171, 69, 231, 0.35)",
        cursor: "pointer",

        "& > img": {
          width: 10,
          userSelect: "none",
        },
      },
    },
    "& > span.volume_controls": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: 100,
      maxWidth: 200,

      "& > img": {
        width: 20,
        userSelect: "none",
        marginRight: 10,
      },
    },
    "& > span.control_btns": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",

      "& > img": {
        width: 20,
        userSelect: "none",
      },
    },

    "& > span.timeline_controls": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: 100,
      maxWidth: 800,
      flex: 2.5,
      "& > span": {
        marginRight: 10,
        marginLeft: 10,
      },
      "& > p": {
        margin: 0,
        fontSize: 12,
        color: theme.palette.textColors.whiteFade,
        minWidth: 33,
        maxWidth: 33,
      },
    },
  },

  "& > span.song_info": {
    zIndex: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    borderRadius: 10,
    width: 400,
    height: 130,
    backgroundColor: "#00000050",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    "& > img": {
      height: "-webkit-fill-available",
      objectFit: "cover",
      borderRadius: 10,
      marginRight: 10,
    },
    "& h3": {
      color: "white",
      margin: 0,
    },
    "& p": {
      color: theme.palette.textColors.whiteFade,
      margin: 0,
    },
    "& > span": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-around",
      height: "-webkit-fill-available",
      "& > span": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        "& > img": {
          cursor: "pointer",
          width: 20,
          marginRight: 10,
        },
      },
    },
  },
}));

const AudioPlayerComponent = () => {
  const { setSong, song } = usePlayer();
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.6);
  const [audioProgress, setAudioProgress] = useState();
  const audioPlayer = useRef();
  useEffect(() => {
    if (song) {
      setAudioProgress(null);
      setIsPlaying(true);
      // setVolume(0.6);
      audioPlayer.current.seekTo(0, "fraction");
    }

    return () => {};
  }, [song]);

  const getSpeakerIcon = () => {
    if (!volume) {
      return staticIcons?.speakerOffIcon;
    }
    if (volume < 0.5) {
      return staticIcons?.speakerMiddleIcon;
    }
    if (volume > 0.5) {
      return staticIcons?.speakerIcon;
    }
  };

  return song ? (
    <AudioPlayerStyled>
      <span className="song_info">
        <img src={previewStaticImage(song?.bannerImg)} alt="song_cover" />
        <span>
          <h3>{song?.songName}</h3>
          <p>{song?.artistName}</p>
          <span>
            <img
              src={previewStaticImage(staticIcons?.shareIcon)}
              alt="share_icon"
            />
            <img
              src={previewStaticImage(staticIcons?.heartFull)}
              alt="favorite_icon"
            />
          </span>
        </span>
      </span>
      <span className={`play_controller`}>
        <span className="main_controls">
          <span
            className="control_icon"
            onClick={() =>
              audioPlayer.current.seekTo(
                audioProgress?.playedSeconds > 10
                  ? audioProgress?.playedSeconds - 10
                  : 0,
                "seconds"
              )
            }
          >
            <img src={staticIcons?.backIcon} alt="back_icon" />
          </span>
          <span
            onClick={() => setIsPlaying(!isPlaying)}
            className="control_icon_pause"
          >
            <img
              src={isPlaying ? staticIcons?.pauseIcon : staticIcons?.playIcon}
              alt="pause_icon"
            />
          </span>
          <span
            className="control_icon"
            onClick={() =>
              audioPlayer.current.seekTo(
                song?.audioDurationInSecond - audioProgress?.playedSeconds > 10
                  ? audioProgress?.playedSeconds + 10
                  : song?.audioDurationInSecond,
                "seconds"
              )
            }
          >
            <img src={staticIcons?.forwardIcon} alt="forward_icon" />
          </span>
        </span>
        <span className="volume_controls">
          <img src={previewStaticImage(getSpeakerIcon())} alt="volume_icon" />
          <Slider
            size="small"
            aria-label="Small"
            value={(volume || 0) * 100}
            color="primary"
            onChange={(e) =>
              setVolume(parseFloat(parseInt(e?.target?.value) / 100))
            }
          />
        </span>

        <span className="timeline_controls">
          <p>{convertSecondsToTime(audioProgress?.playedSeconds || 0)}</p>

          {/* <p>00:00</p> */}
          <Slider
            size="small"
            aria-label="Small"
            defaultValue={0}
            color="primary"
            value={
              parseFloat(
                (audioProgress?.playedSeconds || 0) /
                  song?.audioDurationInSecond
              ) * 100
            }
            onChange={(e) =>
              audioPlayer.current.seekTo(
                parseFloat(e.target.value / 100),
                "fraction"
              )
            }
          />

          {/* <p>03:00</p> */}
          <p>
            -
            {convertSecondsToTime(
              parseInt(
                song?.audioDurationInSecond -
                  (audioProgress?.playedSeconds || 0)
              )
            )}
          </p>
        </span>
        <span className="control_btns">
          <img src={staticIcons?.repeatIcon} alt="repeat_icon" />
        </span>
        <span className="control_btns">
          <img src={staticIcons?.listPlusIcon} alt="list_plus_icon" />
        </span>
        <span className="control_btns">
          <img src={staticIcons?.camIcon} alt="cam_icon" />
        </span>
        <span className="control_btns" onClick={() => setSong(null)}>
          <img src={staticIcons?.closeIcon} alt="close_icon" />
        </span>
      </span>
      <ReactPlayer
        ref={audioPlayer}
        onProgress={(e) => setAudioProgress(e)}
        className="song_player"
        url={song?.audioSource}
        playing={isPlaying}
        stopOnUnmount={false}
        volume={volume}
      />

      {/* <AudioPlayer customVolumeControls={[]} layout='horizontal-reverse' autoPlay src={song?.audioSource} onPlay={(e) => console.log('onPlay')} /> */}
    </AudioPlayerStyled>
  ) : null;
};

export default AudioPlayerComponent;

// {
//   /* <AudioPlayer
// 	onAbort={action('onAbort')}
// 	onCanPlay={action('onCanPlay')}
// 	onCanPlayThrough={action('onCanPlayThrough')}
// 	onEnded={action('onEnded')}
// 	onPlaying={action('onPlaying')}
// 	onSeeking={action('onSeeking')}
// 	onSeeked={action('onSeeked')}
// 	onLoadStart={action('onLoadStart')}
// 	onLoadedMetaData={action('onLoadedMetaData')}
// 	onLoadedData={action('onLoadedData')}
// 	onError={action('onError')}
// 	onListen={action('onListen')}
// 	onVolumeChange={action('onVolumeChange')}
// 	onPause={action('onPause')}
// 	onPlay={action('onPlay')}
// 	onClickPrevious={action('onClickPrevious')}
// 	onClickNext={action('onClickNext')}
// 	volume={0.8}
// 	showSkipControls
// 	progressUpdateInterval={100}
// 	src={SAMPLE_MP3_URL}
// />; */
// }
