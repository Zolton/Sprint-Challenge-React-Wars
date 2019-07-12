import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

function LoaderFile() {
  return (
    //     <div className="ui active inverted dimmer">
    //       <div className="ui large text loader">Loading Star Wars secret Rebel files</div>
    //     </div>
    //   );

    <div>
      <div class="ui segment">
        <div class="ui active transition visible dimmer">
          <div class="content">
            <div class="ui text loader">
              Loading Star Wars secret Rebel files
            </div>
          </div>
        </div>
        <img src="/images/wireframe/short-paragraph.png" class="ui image" />
      </div>
    </div>
  );
}

export default LoaderFile;
