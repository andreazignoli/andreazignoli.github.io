export default function Content() {
  return (
    <>
      <figure>
        <img src="/images/blog_8_front_cover.png" alt="Power profile shifts in fatiguing conditions" style={{ width: '100%' }} />
        <figcaption>Cover Figure: Downward shifts in the power profile were expected and have been documented in fatiguing conditions (adapted from <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ejsc.12077" target="_blank" rel="noopener noreferrer">Spragg et al. 2023</a>). Is it possible at all to receive this info <em>during</em> exercise?</figcaption>
      </figure>

      <h1>An inspirational paper</h1>

      <p>
        In the last few days, a new-ish published paper (<a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ejsc.12077" target="_blank" rel="noopener noreferrer">Spragg et al. 2023</a>) caught my attention. The paper has been written by an esteemed research unit that includes eminent researchers in the field of endurance sports and power profiling in cycling. This study investigated the impact of prior work intensity on the power-duration relationship in professional cyclists. Fourteen cyclists underwent three power profile tests: one in a fresh state and two after different fatiguing protocols. The results suggest that the intensity of prior work, particularly for shorter-duration efforts, plays a crucial role in the downward shift of the power-duration relationship, highlighting the importance of considering work intensity beyond just total workload.
      </p>

      <p>
        The main reason why I felt attracted by this publication is that it aligns perfectly, in my opinion, with the concept behind the <em>Athletica Workout Reserve</em>. Very briefly, the Athletica Workout Reserve does exactly that: it monitors the oscillations of an athlete&apos;s maximal mean power during exercise.
      </p>

      <h2>A very simple idea</h2>

      <p>
        The <a href="https://athletica.ai/athletica-workout-reserve-future-of-fitness/" target="_blank" rel="noopener noreferrer"><em>Athletica Workout Reserve</em></a> is based on a very (very) simple idea. Actually, it might well represent the simplest model for exercise capacity that I am aware of. If the minimal distance between the exercising maximal mean power and the historical maximal mean power can be used as a proxy for exercise capacity, then we can say that: <em>the exercise capacity is depleted and recovered at the pace of the rolling average of the power output that is closest to its historical maximum</em>. It might sound complicated, but this is the shortest and most generic version I could conceive. When the WR is 0% it means that there is a rolling average reaching the 100% of its historical maximum.
      </p>

      <figure>
        <img src="/images/blog_8_signal.png" alt="Workout Reserve signal during HIT session" style={{ width: '100%' }} />
        <figcaption>Example of the fluctuations in Workout Reserve during a simulated HIT session. The minimum Workout Reserve (WR) is depicted in red. The red line follows the rolling average that is closest to its historical maximum. The thin gray lines are the rolling averages that are not limiting the exercise. In this example the minimum WR reaches 50%, which means that the rolling average closest to its maximum is at 50% of this maximum. Eventually, if the WR is 0%, it means that there is a rolling average reaching 100% of its historical maximum.</figcaption>
      </figure>

      <p>
        It must be noted that this concept can be applied broadly to different endurance activities, not only those that involve power measurements such as cycling and rowing. Indeed, in cycling, the power output is directly related to exercise intensity, so for running we should consider the running speed. The same concept is still valid for running speed profiles and, perhaps in the future, running power profiles.
      </p>

      <h2>A real-time Garmin application</h2>

      <p>
        At <a href="https://athletica.ai/" target="_blank" rel="noopener noreferrer">Athletica</a> there is no shortage of brain power. I was lucky enough to have a fan in Paul, and he involved Phil in the implementation of the WR concept on the <a href="https://apps.garmin.com/apps/c9a93545-7db0-4a1b-b955-21db19edbf9d?tid=1" target="_blank" rel="noopener noreferrer">Garmin devices</a>. The app is free to use, but you need a subscription to Athletica, which is also free for a trial.
      </p>

      <p>
        As you can see in the picture below, the value of the minimum WR is presented in %, along with a slider (available in &ldquo;advanced&rdquo; display modality). The % WR tells you how far you are from one of your maximal mean power points, whilst the slider tells you whether these points are those closer to the short-time/high-intensity domain (&ldquo;S&rdquo;) or closer to the long-time/low-intensity domain (&ldquo;L&rdquo;).
      </p>

      <figure>
        <img src="/images/sketch_twitter.png" alt="Garmin Workout Reserve App" style={{ width: '75%' }} />
        <figcaption>The meaning behind the numbers, in a snapshot taken during a training session (photo credits @<a href="https://twitter.com/TiredMomRuns" target="_blank" rel="noopener noreferrer">TiredMomRuns</a>).</figcaption>
      </figure>

      <h2>Is an athlete always exhausted at WR=0%?</h2>

      <p>
        No! Not necessarily. Two perspectives.
      </p>

      <ol>
        <li>It might happen that the WR can fall below 0%, which means that a new record is established and that they have set a new maximal mean power for a specific time/intensity-domain. In this case, there is only a simple explanation: the reached maximal mean power during exercise is &gt;100% of the previously known maximal mean power.</li>
        <li>An athlete can be exhausted before reaching the 100% of their maximal mean power. We should bear in mind that the maximal mean power is populated with the best data we have in the recent history of training/racing. The WR=0% represents a limit, it&apos;s not a <em>sine qua non</em> condition for exhaustion. Exhaustion can occur before that point. This is due to the fact that unfavourable conditions such as heat or injury might impair the ability of an athlete to push at their maximum limits for that specific time/intensity-domain.</li>
      </ol>

      <h2>Is the connection with Athletica necessary?</h2>

      <p>
        The main reasons why the WR App needs Athletica is because Athletica can compute your power/speed profile in the way that can be digested by the WR algorithm. Thanks to the <a href="https://hiitscience.com/the-paradox-of-invisible-monitoring-the-less-you-do-the-more-you-do/" target="_blank" rel="noopener noreferrer">invisible monitoring</a> system that Athletica has in place, if an historical maximal mean power is beaten (WR&lt;0%), an athlete&apos;s <a href="https://athletica.ai/future-of-training-load-control-power-profiling/" target="_blank" rel="noopener noreferrer">power/speed profile</a> is automatically updated.
      </p>

      <p>
        Athletica needs at least 10 sessions to consider your speed/power profile &ldquo;reliable&rdquo;. Therefore, if you are starting on a free trial and you want to test WR from day 0, you might need to use the data already available on your Garmin Connect and/or Strava. After a session is completed, the WR is displayed in the data &ldquo;Analysis&rdquo; tab of the session.
      </p>

      <h2>How can I use WR in training and racing?</h2>

      <p>
        We still have limited experience on how to use the WR during exercise and racing. Some examples have been collected in a <a href="https://athletica.ai/train-and-race-with-athleticas-workout-reserve-on-garmin/" target="_blank" rel="noopener noreferrer">blog post</a>. It is all speculative at the moment, and very experimental.
      </p>

      <p>
        Whether this tool can be used to assess an athlete&apos;s &ldquo;fatiguability&rdquo; is an open question. What is also unknown is whether WR can be somehow associated with rating of perceived exertion (RPE). It is natural to think that the closer an athlete is to their maximum, the higher the RPE. Also, very brief maximal exercise might elevate RPE for shorter amount of time compared to long duration efforts. In these terms, it sounds like the dynamics of RPE might be associated with WR (again, all speculative at the moment).
      </p>

      <p>
        The great advantages of WR, is that: 1) this can be assessed in real-time, and 2) the specific time/intensity domain that leads to exhaustion can be revealed. All-in-all the WR holds some promise and, in my view, it aligns well with the rising concepts of &ldquo;durability&rdquo; and &ldquo;moving thresholds&rdquo;. Indeed, for WR, there are no thresholds at all, just upper limits.
      </p>

      <h2>Note about &ldquo;fatigue&rdquo;</h2>

      <p>
        The reason I used quotes for the word &ldquo;fatigue&rdquo; is because, to my knowledge, the downward shifts in maximum mean power have not yet been associated with standard markers of fatigue, such as maximal voluntary contraction, etc. I maintained the terminology adopted in the paper by Spragg et al. to ensure consistency.
      </p>

      <h2>References and additional reading</h2>

      <ul>
        <li>On power profiling: <a href="https://link.springer.com/article/10.1007/s00421-021-04833-y" target="_blank" rel="noopener noreferrer">Leo et al. 2022</a></li>
        <li>On durability: <a href="https://link.springer.com/article/10.1007/s40279-021-01459-0" target="_blank" rel="noopener noreferrer">Maunder et al. 2021</a></li>
        <li>On downward shifting of maximal mean power in fatigued conditions: <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ejsc.12077" target="_blank" rel="noopener noreferrer">Spragg et al. 2023</a></li>
        <li>Rationale behind the Workout Reserve concept: <a href="https://sportrxiv.org/index.php/server/preprint/view/244/version/308" target="_blank" rel="noopener noreferrer">Zignoli 2023, preprint</a></li>
        <li>On ventilatory threshold changes in fatigued conditions: <a href="https://link.springer.com/article/10.1007/s00421-024-05440-3" target="_blank" rel="noopener noreferrer">Gallo et al. 2024</a></li>
      </ul>

      <h3>To test the app for free</h3>

      <ul>
        <li><a href="https://athletica.ai/athletica-workout-reserve-future-of-fitness/" target="_blank" rel="noopener noreferrer">Learn more about Workout Reserve on the HIIT Science blog</a></li>
        <li><a href="https://athletica.ai/" target="_blank" rel="noopener noreferrer">Set up an Athletica account</a> and start a free trial</li>
        <li><a href="https://apps.garmin.com/apps/c9a93545-7db0-4a1b-b955-21db19edbf9d" target="_blank" rel="noopener noreferrer">Download the Garmin App</a></li>
        <li><a href="https://athletica.ai/train-and-race-with-athleticas-workout-reserve-on-garmin/" target="_blank" rel="noopener noreferrer">Read about how to use the Workout Reserve Garmin App</a></li>
        <li><a href="https://forum.athletica.ai/t/garmin-connectiq-workout-reserve-data-field/1039/269" target="_blank" rel="noopener noreferrer">Engage with early adopters on the Athletica forum</a></li>
      </ul>
    </>
  )
}
