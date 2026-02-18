import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./spendo.css";

export const metadata = {
  title: "About",
  description: "Meet Panchal's Curriculum Vitae.",
  openGraph: {
    title: "Spendo",
    description: "Meet Panchal's Curriculum Vitae",
    url: "https://meetpanchal.com/about",
  },
};

export default function AboutPage() {
  return (
    <SectionShell title="Spendo" subtitle="Spendo" isProjectPage={true}>
      <main className="main giant-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape spendo-hero-frame">
            <video
                src="/projects/spendo/hover.mp4"
              className="spendo-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Spendo hero video"
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="value font-montserrat"
            style={{ fontSize: "14px", fontWeight: "500", lineHeight: "25px" }}
          >
            Corporate Petty Cash Management Solution
          </div>
          <div className="label">
            Website Design
            <br />
            Product UX
          </div>
          <div className="muted-text">
            Spendo is a web-based petty cash management platform designed to
            simplify expense tracking and approvals for teams.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">SPENDO</div>
          <div className="value font-montserrat" style={{ fontWeight: "700" }}>
            CONTENT
          </div>
          <div className="value font-montserrat" style={{ fontWeight: "700" }}>
            ABOUT
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text">
            Spendo is a petty cash management solution designed to streamline
            expense tracking and financial oversight. The project focused on
            developing the website and shaping the product UX, ensuring
            intuitive navigation, clear workflows, and a user-centred interface
            that supports efficient cash management.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Location:
              </div>
              <div className="value">UAE</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Status:
              </div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <div className="value">Stackbuilder</div>
            </div>
            <div>
              <div className="label">Project team:</div>
              <div className="value">
                Kishan Solanki, Meet Panchal, Sudama Yadav{" "}
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">WEBSITE DESIGN</div>
          <p className="muted-text">
            Designed the Spendo website to clearly communicate product value,
            simplify a finance-heavy narrative, and build trust with users. The
            focus was on clarity, structured layouts, and positioning the
            platform as an efficient, transparent financial tool.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame spendo-showcase">
            <div className="spendo-showcase-inner">
              <div className="spendo-top-image">
                <img src="/MEDIA/Spendo%201.png" alt="Spendo 1" />
              </div>

              <div className="spendo-flow">
                <div
                  className="spendo-flow-scale-wrap"
                  data-base-width="1400"
                  data-base-height="170"
                >
                  <div className="spendo-flow-canvas spendo-flow-canvas--clean">
                    <svg
                      className="spendo-flow-svg"
                      viewBox="0 0 1400 170"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <defs>
                        <marker
                          id="flowArrow"
                          viewBox="0 0 10 10"
                          refX="9"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto-start-reverse"
                        >
                          <path
                            d="M 0 0 L 10 5 L 0 10 z"
                            fill="currentColor"
                          ></path>
                        </marker>
                        <marker
                          id="flowArrowFirst"
                          viewBox="0 0 10 10"
                          refX="9"
                          refY="5"
                          markerWidth="8"
                          markerHeight="8"
                          orient="auto"
                        >
                          <path
                            d="M 0 0 L 10 5 L 0 10 z"
                            fill="currentColor"
                          ></path>
                        </marker>
                      </defs>

                      <path
                        className="flow-conn flow-conn-first"
                        d="M 74 76 L 102 76"
                        marker-end="url(#flowArrowFirst)"
                      />
                      <path
                        className="flow-conn"
                        d="M 176 76 L 200 76"
                        marker-end="url(#flowArrow)"
                      />

                      <path
                        className="flow-conn"
                        d="M 318 76 L 350 76"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 318 76 L 340 76 L 340 34 L 350 34"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 318 76 L 340 76 L 340 116 L 350 116"
                        marker-end="url(#flowArrow)"
                      />

                      <path
                        className="flow-conn"
                        d="M 442 76 L 480 76"
                        marker-end="url(#flowArrow)"
                      />

                      <path
                        className="flow-conn"
                        d="M 578 76 L 610 76"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 578 76 L 600 76 L 600 38 L 610 38"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 578 76 L 600 76 L 600 116 L 610 116"
                        marker-end="url(#flowArrow)"
                      />

                      <path
                        className="flow-conn"
                        d="M 688 76 L 740 76"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 688 76 L 720 76 L 720 24 L 740 24"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 688 76 L 720 76 L 720 140 L 740 140"
                        marker-end="url(#flowArrow)"
                      />

                      <path
                        className="flow-conn"
                        d="M 842 76 L 880 76"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 974 76 L 1000 76"
                        marker-end="url(#flowArrow)"
                      />

                      <path
                        className="flow-conn"
                        d="M 1098 76 L 1120 76"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 1098 76 L 1110 76 L 1110 34 L 1120 34"
                        marker-end="url(#flowArrow)"
                      />
                      <path
                        className="flow-conn"
                        d="M 1098 76 L 1110 76 L 1110 116 L 1120 116"
                        marker-end="url(#flowArrow)"
                      />

                      <path
                        className="flow-conn"
                        d="M 1212 76 L 1240 76"
                        marker-end="url(#flowArrow)"
                      />
                    </svg>

                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "10px",
                        top: "58px",
                        width: "64px",
                        height: "36px",
                      }}
                    >
                      Employee
                    </div>
                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "100px",
                        top: "51px",
                        width: "76px",
                        height: "50px",
                      }}
                    >
                      Login to
                      <br />
                      Spendo
                    </div>
                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "200px",
                        top: "43px",
                        width: "118px",
                        height: "66px",
                      }}
                    >
                      Create Petty
                      <br />
                      Cash Request
                      <br />
                      (Amount + Purpose)
                    </div>

                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "350px",
                        top: "12px",
                        width: "92px",
                        height: "44px",
                      }}
                    >
                      Spendo
                      <br />
                      Tech System
                    </div>
                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "350px",
                        top: "88px",
                        width: "92px",
                        height: "56px",
                      }}
                    >
                      Validate
                      <br />
                      Policy & Limits
                    </div>

                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "480px",
                        top: "51px",
                        width: "98px",
                        height: "50px",
                      }}
                    >
                      Review Request
                      <br />
                      (Manager)
                    </div>

                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "610px",
                        top: "20px",
                        width: "78px",
                        height: "36px",
                      }}
                    >
                      Approve
                    </div>
                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "610px",
                        top: "88px",
                        width: "78px",
                        height: "56px",
                      }}
                    >
                      Reject
                      <br />
                      (If Approved)
                    </div>

                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "740px",
                        top: "4px",
                        width: "102px",
                        height: "40px",
                      }}
                    >
                      Spendo Tech System
                    </div>
                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "740px",
                        top: "50px",
                        width: "102px",
                        height: "56px",
                      }}
                    >
                      Update Petty
                      <br />
                      Cash Balance
                    </div>
                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "740px",
                        top: "122px",
                        width: "102px",
                        height: "36px",
                      }}
                    >
                      Log Transaction
                    </div>

                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "880px",
                        top: "51px",
                        width: "94px",
                        height: "50px",
                      }}
                    >
                      Spend Cash
                      <br />
                      (Employee)
                    </div>
                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "1000px",
                        top: "51px",
                        width: "98px",
                        height: "50px",
                      }}
                    >
                      Upload Receipt
                      <br />
                      (Employee)
                    </div>

                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "1120px",
                        top: "12px",
                        width: "92px",
                        height: "44px",
                      }}
                    >
                      Spendo
                      <br />
                      Tech System
                    </div>
                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "1120px",
                        top: "88px",
                        width: "92px",
                        height: "56px",
                      }}
                    >
                      Attach Receipt
                      <br />
                      To Spend
                    </div>

                    <div
                      className="flow-node flow-node-abs"
                      style={{
                        left: "1240px",
                        top: "43px",
                        width: "140px",
                        height: "66px",
                      }}
                    >
                      Monitor Dashboard
                      <br />
                      Audit & Reconcile
                      <br />
                      (Finance / Admin)
                    </div>
                  </div>
                </div>
              </div>

              <div className="spendo-bottom-image">
                <img src="/MEDIA/Spendo 2.png" alt="Spendo product screen" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right">
            Website design for Spendo focused on clear messaging, structured
            content, and a professional visual language to communicate value and
            build trust around petty cash management.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">PRODUCT UX</div>
          <p className="muted-text">
            Led the product UX for Spendo by defining user flows for expense
            tracking, approvals, and reporting. The work emphasized simplicity,
            reduced cognitive load, and usability, enabling teams to manage
            petty cash with accuracy and minimal friction.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame spendo-showcase">
            <div className="spendo-showcase-inner">
              <div className="spendo-top-image">
                <img src="/MEDIA/Spendo 3.png" alt="Spendo 1" />
              </div>

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  paddingLeft: "45.43px",
                  paddingRight: "45.43px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    padding: "9.09px",
                    background: "var(--MM5, #AEADB2)",
                    overflow: "hidden",
                    borderRadius: "9.09px",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "18.17px",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        color: "var(--MM2, #32323E)",
                        fontSize: "14.54px",
                        fontFamily: "Satoshi",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Problem Identification
                    </div>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        paddingLeft: "13.63px",
                        paddingRight: "13.63px",
                        paddingTop: "10.90px",
                        paddingBottom: "10.90px",
                        background: "var(--MM8, #EEEEEE)",
                        borderRadius: "7.27px",
                        outline: "0.45px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4.54px",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          color: "var(--MM2, #32323E)",
                          fontSize: "11.81px",
                          fontFamily: "Satoshi",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Manual Petty Cash Handling
                      </div>
                    </div>
                    <div
                      style={{
                        width: "27.26px",
                        height: "0px",
                        transform: "rotate(90deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "27.26px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: "13.63px",
                          paddingRight: "13.63px",
                          paddingTop: "10.90px",
                          paddingBottom: "10.90px",
                          background: "var(--MM8, #EEEEEE)",
                          borderRadius: "7.27px",
                          outline: "0.45px var(--MM2, #32323E) solid",
                          outlineOffset: "-0.45px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4.54px",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "11.81px",
                            fontFamily: "Satoshi",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Lack of Visibility & Control
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "27.26px",
                        height: "0px",
                        transform: "rotate(90deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "27.26px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: "13.63px",
                          paddingRight: "13.63px",
                          paddingTop: "10.90px",
                          paddingBottom: "10.90px",
                          background: "var(--MM8, #EEEEEE)",
                          borderRadius: "7.27px",
                          outline: "0.45px var(--MM2, #32323E) solid",
                          outlineOffset: "-0.45px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4.54px",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "11.81px",
                            fontFamily: "Satoshi",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Delayed Approvals
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "27.26px",
                        height: "0px",
                        transform: "rotate(90deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "27.26px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: "13.63px",
                          paddingRight: "13.63px",
                          paddingTop: "10.90px",
                          paddingBottom: "10.90px",
                          background: "var(--MM8, #EEEEEE)",
                          borderRadius: "7.27px",
                          outline: "0.45px var(--MM2, #32323E) solid",
                          outlineOffset: "-0.45px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4.54px",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "11.81px",
                            fontFamily: "Satoshi",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Audit & Compliance Risks
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "55.43px",
                    height: "0px",
                    outline: "0.91px var(--MM3, #5B5B63) solid",
                    outlineOffset: "-0.45px",
                  }}
                ></div>
                <div
                  style={{
                    width: "336.21px",
                    height: "0px",
                    transform: "rotate(90deg)",
                    transformOrigin: "top left",
                    outline: "0.91px var(--MM3, #5B5B63) solid",
                    outlineOffset: "-0.45px",
                  }}
                ></div>
                <div
                  style={{
                    width: "35.44px",
                    height: "0px",
                    outline: "0.91px var(--MM3, #5B5B63) solid",
                    outlineOffset: "-0.45px",
                  }}
                ></div>
                <div
                  style={{
                    width: "35.44px",
                    height: "0px",
                    outline: "0.91px var(--MM3, #5B5B63) solid",
                    outlineOffset: "-0.45px",
                  }}
                ></div>
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "45.43px",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      overflow: "hidden",
                      justifyContent: "space-between",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        padding: "9.09px",
                        background: "var(--MM5, #AEADB2)",
                        borderRadius: "9.09px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "18.17px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "14.54px",
                            fontFamily: "Satoshi",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          User Definition
                        </div>
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Employee -Spends & Submits Proof
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Manager- Controls & Approves
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Finance/Admin - Audits & Governs
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              System - Enforces Rules
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1 1 0",
                        height: "0px",
                        transform: "rotate(180deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM3, #5B5B63) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        padding: "9.09px",
                        background: "var(--MM5, #AEADB2)",
                        borderRadius: "9.09px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "18.17px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "14.54px",
                            fontFamily: "Satoshi",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          Policy & System Setup
                        </div>
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: "13.63px",
                            paddingRight: "13.63px",
                            paddingTop: "10.90px",
                            paddingBottom: "10.90px",
                            background: "var(--MM8, #EEEEEE)",
                            borderRadius: "7.27px",
                            outline: "0.45px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4.54px",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              color: "var(--MM2, #32323E)",
                              fontSize: "11.81px",
                              fontFamily: "Satoshi",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Define Petty Cash Limits
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Assign Approval Hierarchies
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Set Categories & Rules
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Configure Audit Requirements
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1 1 0",
                        height: "0px",
                        transform: "rotate(180deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM3, #5B5B63) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        padding: "9.09px",
                        background: "var(--MM5, #AEADB2)",
                        borderRadius: "9.09px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "18.17px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "14.54px",
                            fontFamily: "Satoshi",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          Request & Validation Flow
                        </div>
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: "13.63px",
                            paddingRight: "13.63px",
                            paddingTop: "10.90px",
                            paddingBottom: "10.90px",
                            background: "var(--MM8, #EEEEEE)",
                            borderRadius: "7.27px",
                            outline: "0.45px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4.54px",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              color: "var(--MM2, #32323E)",
                              fontSize: "11.81px",
                              fontFamily: "Satoshi",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Employee Creates Request
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Adds Amount & Purpose
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              System Validates Against Policy
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Request Routed Automatically
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      overflow: "hidden",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        padding: "9.09px",
                        background: "var(--MM5, #AEADB2)",
                        borderRadius: "9.09px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "18.17px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "14.54px",
                            fontFamily: "Satoshi",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          Approval and Decicion Layer
                        </div>
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: "13.63px",
                            paddingRight: "13.63px",
                            paddingTop: "10.90px",
                            paddingBottom: "10.90px",
                            background: "var(--MM8, #EEEEEE)",
                            borderRadius: "7.27px",
                            outline: "0.45px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4.54px",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              color: "var(--MM2, #32323E)",
                              fontSize: "11.81px",
                              fontFamily: "Satoshi",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Manager Receives Notification
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Reviews Context & Limits
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Approves / Reject Request
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Decision Logged by System
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "57.25px",
                        height: "0px",
                        transform: "rotate(180deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        padding: "9.09px",
                        background: "var(--MM5, #AEADB2)",
                        borderRadius: "9.09px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "18.17px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "14.54px",
                            fontFamily: "Satoshi",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          Spend, Proof and Tracking
                        </div>
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: "13.63px",
                            paddingRight: "13.63px",
                            paddingTop: "10.90px",
                            paddingBottom: "10.90px",
                            background: "var(--MM8, #EEEEEE)",
                            borderRadius: "7.27px",
                            outline: "0.45px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4.54px",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              color: "var(--MM2, #32323E)",
                              fontSize: "11.81px",
                              fontFamily: "Satoshi",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Approved Balanced Released
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Employee Spends Petty Cash
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Receipt Uploaded Post-Spend
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Transaction Linked & Locked
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "57.25px",
                        height: "0px",
                        transform: "rotate(180deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        padding: "9.09px",
                        background: "var(--MM5, #AEADB2)",
                        borderRadius: "9.09px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "18.17px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "14.54px",
                            fontFamily: "Satoshi",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          Oversight, Audit and Control
                        </div>
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: "13.63px",
                            paddingRight: "13.63px",
                            paddingTop: "10.90px",
                            paddingBottom: "10.90px",
                            background: "var(--MM8, #EEEEEE)",
                            borderRadius: "7.27px",
                            outline: "0.45px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4.54px",
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              color: "var(--MM2, #32323E)",
                              fontSize: "11.81px",
                              fontFamily: "Satoshi",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            Finance Views Dashboards
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Spends tracked in real time
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Anomalies Flagged by System
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "27.26px",
                            height: "0px",
                            transform: "rotate(90deg)",
                            transformOrigin: "top left",
                            outline: "0.91px var(--MM2, #32323E) solid",
                            outlineOffset: "-0.45px",
                          }}
                        ></div>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: "27.26px",
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              paddingLeft: "13.63px",
                              paddingRight: "13.63px",
                              paddingTop: "10.90px",
                              paddingBottom: "10.90px",
                              background: "var(--MM8, #EEEEEE)",
                              borderRadius: "7.27px",
                              outline: "0.45px var(--MM2, #32323E) solid",
                              outlineOffset: "-0.45px",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4.54px",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                color: "var(--MM2, #32323E)",
                                fontSize: "11.81px",
                                fontFamily: "Satoshi",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              Audit trial always available
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "39.07px",
                    height: "0px",
                    transform: "rotate(180deg)",
                    transformOrigin: "top left",
                    outline: "0.91px var(--MM3, #5B5B63) solid",
                    outlineOffset: "-0.45px",
                  }}
                ></div>
                <div
                  style={{
                    width: "336.21px",
                    height: "0px",
                    transform: "rotate(270deg)",
                    transformOrigin: "top left",
                    outline: "0.91px var(--MM3, #5B5B63) solid",
                    outlineOffset: "-0.45px",
                  }}
                ></div>
                <div
                  style={{
                    width: "47.25px",
                    height: "0px",
                    transform: "rotate(180deg)",
                    transformOrigin: "top left",
                    outline: "0.91px var(--MM3, #5B5B63) solid",
                    outlineOffset: "-0.45px",
                  }}
                ></div>
                <div
                  style={{
                    width: "47.25px",
                    height: "0px",
                    transform: "rotate(180deg)",
                    transformOrigin: "top left",
                    outline: "0.91px var(--MM3, #5B5B63) solid",
                    outlineOffset: "-0.45px",
                  }}
                ></div>
                <div
                  style={{
                    padding: "9.09px",
                    background: "var(--MM5, #AEADB2)",
                    overflow: "hidden",
                    borderRadius: "9.09px",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "18.17px",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        color: "var(--MM2, #32323E)",
                        fontSize: "14.54px",
                        fontFamily: "Satoshi",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Insights and Impact
                    </div>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        paddingLeft: "13.63px",
                        paddingRight: "13.63px",
                        paddingTop: "10.90px",
                        paddingBottom: "10.90px",
                        background: "var(--MM8, #EEEEEE)",
                        borderRadius: "7.27px",
                        outline: "0.45px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4.54px",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          color: "var(--MM2, #32323E)",
                          fontSize: "11.81px",
                          fontFamily: "Satoshi",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Usage patterns analyzed
                      </div>
                    </div>
                    <div
                      style={{
                        width: "27.26px",
                        height: "0px",
                        transform: "rotate(90deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "27.26px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: "13.63px",
                          paddingRight: "13.63px",
                          paddingTop: "10.90px",
                          paddingBottom: "10.90px",
                          background: "var(--MM8, #EEEEEE)",
                          borderRadius: "7.27px",
                          outline: "0.45px var(--MM2, #32323E) solid",
                          outlineOffset: "-0.45px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4.54px",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "11.81px",
                            fontFamily: "Satoshi",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Policy gaps identified
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "27.26px",
                        height: "0px",
                        transform: "rotate(90deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "27.26px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: "13.63px",
                          paddingRight: "13.63px",
                          paddingTop: "10.90px",
                          paddingBottom: "10.90px",
                          background: "var(--MM8, #EEEEEE)",
                          borderRadius: "7.27px",
                          outline: "0.45px var(--MM2, #32323E) solid",
                          outlineOffset: "-0.45px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4.54px",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "11.81px",
                            fontFamily: "Satoshi",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Limits & Workflows refined
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "27.26px",
                        height: "0px",
                        transform: "rotate(90deg)",
                        transformOrigin: "top left",
                        outline: "0.91px var(--MM2, #32323E) solid",
                        outlineOffset: "-0.45px",
                      }}
                    ></div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "27.26px",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: "13.63px",
                          paddingRight: "13.63px",
                          paddingTop: "10.90px",
                          paddingBottom: "10.90px",
                          background: "var(--MM8, #EEEEEE)",
                          borderRadius: "7.27px",
                          outline: "0.45px var(--MM2, #32323E) solid",
                          outlineOffset: "-0.45px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4.54px",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--MM2, #32323E)",
                            fontSize: "11.81px",
                            fontFamily: "Satoshi",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          System improves over time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spendo-bottom-image">
                <img src="/MEDIA/Spendo 4.png" alt="Spendo product screen" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right">
            Product UX design for Spendo, shaping intuitive workflows for
            expense tracking and approvals to ensure clarity, ease of use, and
            reliable petty cash management.
          </p>
        </section>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
