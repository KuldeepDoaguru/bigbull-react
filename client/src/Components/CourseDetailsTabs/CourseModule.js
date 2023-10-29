import React, { useState } from "react";
import styled from "styled-components";
import VideoPlaylist from "../VideoPlaylist";
import VideoPlayer from "../VideoPlayer";

const CourseModule = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideos, setShowVideos] = useState(false);

  const videos = [
    {
      title: "Video 1",
      url: "https://res.cloudinary.com/dq5upuxm8/video/upload/v1697973901/Stranger_Things_4___Volume_2_Trailer___Netflix_u6dbve.mp4",
    },
    {
      title: "Video 2",
      url: "https://res.cloudinary.com/dq5upuxm8/video/upload/v1696504303/samples/sea-turtle.mp4",
    },
  ];

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <>
      <Container>
        <div className="container">
          <h2 className="mt-5">Course content</h2>
          <p>6 Section * 24 Videos</p>
        </div>
        {!showVideos ? (
          <>
            <h3 className="" style={{ color: "red" }}>
              You need to buy this course to watch videos
            </h3>
          </>
        ) : (
          <>
            {" "}
            <div className="divfull">
              <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                First Module
              </button>
              <div class="collapse" id="collapseExample">
                <div className="border p-2">
                  <div class="card card-body mt-1 border">
                    <div className="watch-playlist">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="border-right">
                            <VideoPlaylist
                              videos={videos}
                              onVideoSelect={handleVideoSelect}
                              className="border"
                            />
                          </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                          <div className="border-left">
                            {selectedVideo && (
                              <VideoPlayer video={selectedVideo} />
                            )}
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* second module */}
              <div className="mt-1">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#secondmodule"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Second Module
                </button>
                <div class="collapse" id="secondmodule">
                  <div className="border p-2">
                    <div class="card card-body mt-1 border">
                      <div className="watch-playlist">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="border-right">
                              <VideoPlaylist
                                videos={videos}
                                onVideoSelect={handleVideoSelect}
                                className="border"
                              />
                            </div>
                          </div>

                          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="border-left">
                              {selectedVideo && (
                                <VideoPlayer video={selectedVideo} />
                              )}
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* third module */}
              <div className="mt-1">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#thirdmodule"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Third Module
                </button>
                <div class="collapse" id="thirdmodule">
                  <div className="border p-2">
                    <div class="card card-body mt-1 border">
                      <div className="watch-playlist">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="border-right">
                              <VideoPlaylist
                                videos={videos}
                                onVideoSelect={handleVideoSelect}
                                className="border"
                              />
                            </div>
                          </div>

                          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="border-left">
                              {selectedVideo && (
                                <VideoPlayer video={selectedVideo} />
                              )}
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* fourth module */}
              <div className="mt-1">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#fourthmodule"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Fourth Module
                </button>
                <div class="collapse" id="fourthmodule">
                  <div className="border p-2">
                    <div class="card card-body mt-1 border">
                      <div className="watch-playlist">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="border-right">
                              <VideoPlaylist
                                videos={videos}
                                onVideoSelect={handleVideoSelect}
                                className="border"
                              />
                            </div>
                          </div>

                          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="border-left">
                              {selectedVideo && (
                                <VideoPlayer video={selectedVideo} />
                              )}
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* fifth module */}
              <div className="mt-1">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#fifthmodule"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Fifth Module
                </button>
                <div class="collapse" id="fifthmodule">
                  <div className="border p-2">
                    <div class="card card-body mt-1 border">
                      <div className="watch-playlist">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="border-right">
                              <VideoPlaylist
                                videos={videos}
                                onVideoSelect={handleVideoSelect}
                                className="border"
                              />
                            </div>
                          </div>

                          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="border-left">
                              {selectedVideo && (
                                <VideoPlayer video={selectedVideo} />
                              )}
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default CourseModule;
const Container = styled.div`
  .divfull {
    button {
      width: 100%;
      text-align: start;
      background: #596262;
      border: none;
    }
  }

  .videoModule {
    height: 12rem;
    width: 14rem;
  }

  .carvide {
    width: 18rem;
  }

  .border-left {
    height: 100%;
  }
`;
