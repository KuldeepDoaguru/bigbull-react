import React from "react";
import styled from "styled-components";

const CourseModule = () => {
  return (
    <>
      <Container>
        <div className="container">
          <h2 className="mt-5">Course content</h2>
          <p>6 Section * 24 Videos</p>
        </div>
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
            <div class="card card-body mt-1 w-100">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
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
              <div class="card card-body mt-1 w-100">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
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
              <div class="card card-body mt-1 w-100">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
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
              <div class="card card-body mt-1 w-100">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
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
              <div class="card card-body mt-1 w-100">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </div>
          </div>
        </div>
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
`;
