import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [showData, setShowData] = React.useState({});
  const [showID, setShowID] = React.useState(5675);
  const [showSeason, setShowSeason] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(
    function () {
      fetch(`https://podcast-api.netlify.app/id/${showID}`)
        .then((res) => res.json())
        .then((data) => setShowData(data));
    },
    [showID]
  );

  const currentSeasonData = showData.seasons?.[showSeason - 1] || {};

  return (
    <React.Fragment>
      <Button className="explore--button" onClick={handleClickOpen}>
        Explore
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div>
      {showData.title && (
        <div>
          <h3>{showData.title}</h3>

          {showData.image && (
            <img
              src={showData.image}
              alt={showData.title}
              className="card--image"
            />
          )}

          <p>{showData.description}</p>

          <div>
            <button
              onClick={() =>
                setShowSeason((prevSeason) => Math.max(prevSeason - 1, 1))
              }
            >
              Previous Season
            </button>
            <button
              onClick={() =>
                setShowSeason((prevSeason) =>
                  Math.min(prevSeason + 1, showData.seasons.length)
                )
              }
            >
              Next Season
            </button>
          </div>
          {currentSeasonData.title && (
            <div>
              <h4>{currentSeasonData.title}</h4>
              {currentSeasonData.episodes && (
                <div>
                  <h5>Episodes:</h5>
                  <ul>
                    {currentSeasonData.episodes.map((episode, index) => (
                      <li key={index} className="episodes">
                        <p>
                          Episode {episode.episode}: {episode.title}   <img src="../images/star-empty.svg" className="star--empty" />
                        </p>
                        {episode.file && (
                          <audio
                            controls
                            src="https://podcast-api.netlify.app/placeholder-audio.mp3"
                          >
                            Your browser does not support the
                            <code>audio</code> element.
                          </audio>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

      
        </div>
      )}

      {/* <pre>{JSON.stringify(showData, null, 2)}</pre> */}
    </div>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}