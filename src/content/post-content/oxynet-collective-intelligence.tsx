export default function Content() {
  return (
    <>
      <figure>
        <img src="/images/front_cover_blog_1.jpeg" alt="Cover" style={{ width: '100%' }} />
        <figcaption>Photo by Ricardo Gomez Angel on Unsplash</figcaption>
      </figure>

      <p>
        This blog post was originally first published on{' '}
        <a href="https://www.linkedin.com/pulse/oxynet-collective-intelligence-approach-test-andrea-zignoli/?trackingId=4jrP2%2Fs1mkaZP6C%2Bim1cIQ%3D%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
      </p>

      <h1>Can researchers in AI-medicine help delivering more equitable and accessible healthcare services?</h1>

      <p>
        Some challenges transcend both time and geographical boundaries, and providing people with universal access to good quality health &amp; care services is one of them. With strained healthcare systems and ageing populations, the world requires coordinated and systemic actions to provide timely and efficient diagnostics. As reported in the <a href="https://ec.europa.eu/eip/ageing/news/publication-revised-version-orientations-towards-first-strategic-plan-horizon-europe-share-your_en" target="_blank" rel="noopener noreferrer">Orientations Towards the First Strategic Plan for Horizon Europe</a>:
      </p>

      <figure className="quote">
        <blockquote>
          It is a main priority for the EU to support Member States in ensuring that health care systems are effective, efficient, equitable, accessible, and resilient while remaining fiscally sustainable in the medium and long term.
        </blockquote>
      </figure>

      <p>
        It&apos;s pretty apparent that the EU community longs for solutions for the digital transformation of the healthcare system that could extend the reach of the high-level medicine outside the boundaries of the most developed countries. Emerging technologies in the field of <a href="https://www.nature.com/articles/s41591-018-0300-7" target="_blank" rel="noopener noreferrer">AI-medicine</a> can offer big opportunities to stimulate innovation and develop solutions in a wide variety of fields.
      </p>

      <h2>What is AI-medicine in cardiopulmonary exercise testing?</h2>

      <p>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2647882/" target="_blank" rel="noopener noreferrer">Cardiopulmonary exercising testing</a> (CPET) is used worldwide to assess the responses of an individual&apos;s cardiovascular and ventilatory systems to a known increasing working load. The results can be interpreted as a reflection on the general physical condition of the test patient and can be used to diagnose a number of cardiovascular diseases (e.g. coronary artery (ischemic heart)) and assess patient prognosis after a heart attack.
      </p>

      <p>
        The main limitations that hinder the applicability of the CPET to a global scale are: A) it&apos;s time-consuming and it must be conducted in a well-controlled environment; B) interpreting the results requires a high-level expertise and it might become subjective in some case.
      </p>

      <p>
        On a scale much smaller than what has been seen in <a href="https://stanfordmlgroup.github.io/projects/ecg2/" target="_blank" rel="noopener noreferrer">cardiology</a> and <a href="https://www.nature.com/articles/nature21056" target="_blank" rel="noopener noreferrer">dermatology</a>, AI technologies such as machine learning and deep learning have been applied to CPET interpretation. This was done in the attempt to reduce variability of the interpretations across different experts and centres, and to ultimately help reducing the costs associated with current evaluation errors and delays.
      </p>

      <figure className="quote">
        <blockquote>
          In general, we can define AI in CPET interpretation as the use of algorithms and software to approximate human cognition in the analysis of CPET data.
        </blockquote>
      </figure>

      <p>
        <strong>The purpose of the <a href="https://oxynet.net" target="_blank" rel="noopener noreferrer">Oxynet</a> project is to develop automatic interpreters of cardiopulmonary exercising tests (CPET).</strong> To this, Oxynet wants to become a tool for a quick and encompassing diagnosis of medical conditions with CPET and promote accurate and timely clinical decisions.
      </p>

      <h2>Innovative aspects of Oxynet</h2>

      <p>
        Oxynet project was inspired by other bigger projects such as <a href="http://www.image-net.org/" target="_blank" rel="noopener noreferrer">ImageNet</a> and <a href="https://wordnet.princeton.edu/" target="_blank" rel="noopener noreferrer">WordNet</a>. It is based on a <em>collective intelligence</em> emerging from a network of internationally recognized experts in the field of CPET. The concept is very easy: a number of already interpreted CPET files are collected in datasets and they are used to train a deep neural network for the interpretation of new <em>unseen</em> files.
      </p>

      <h2>Collective intelligence explained</h2>

      <p>
        At the time of writing, Oxynet can support experts on a particular subclass of problems related to CPET interpretation: the ventilatory thresholds detection. The current AI algorithm is trained everyday with the data available on the servers.
      </p>

      <figure className="quote">
        <blockquote>
          This means that the ability of the AI in estimating ventilatory thresholds from CPET can improve day-after-day.
        </blockquote>
      </figure>

      <p>
        The accuracy of the Oxynet deep learning algorithm has been evaluated against the interpretation of independent and impartial experts. Results are encouraging, and indicate the possibility to use the algorithm in parallel with visual data inspection to speed up the interpretation of a CPET. Compared to other available computerised methods, Oxynet is more flexible, it doesn&apos;t need any data pre-process and it&apos;s poorly affected by noisy data. However, <strong>it&apos;s the ability to integrate experts&apos; opinions</strong> that sets Oxynet apart from the other existing methods for automatic ventilatory thresholds detection.
      </p>

      <h2>Collaborative efforts</h2>

      <p>
        The use of AI-medicine techniques in automatic CPET interpretation raises a number of ethical questions regarding the reporting of standards for automatic methods vs experts. Admittedly, it is impossible to eliminate all the issues around subjective CPET data interpretation at once, and this is an ongoing process that will take time to take place.
      </p>

      <p>
        Will we ever get to a point where the effects of the noise will be cancelled out and the interpretation obtained by aggregating all the different opinions will be as good as the opinions of the most-skilled persons in the group? Hopefully, yes&hellip;
      </p>

      <figure className="quote">
        <blockquote>
          An idiosyncratic noise is associated with each individual evaluation but taking the average over a large number of evaluations will likely get us closer to the ground-truth.
        </blockquote>
      </figure>

      <p>
        This phenomenon, <em>is known as the <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1551-6709.2011.01223.x" target="_blank" rel="noopener noreferrer">wisdom of the crowd</a> effect</em>, and it&apos;s about being able to sift out the noise of the individual interpretations to get closer to the ground truth.
      </p>

      <h2>Conclusions</h2>

      <p>
        There are two big limitations to the applicability of new AI-medicine algorithms: data availability and cross-expert communication. Oxynet has been conceived to facilitate both data sharing and experts exchange of knowledge. The constant increase of the internet usage worldwide is evident, and CPET data availability will likely increase in parallel. These trends suggest that this initiative will find fertile ground where to grow, and that international collaborative efforts will be needed to keep growing together.
      </p>

      <p>
        Considering the structure, the results and the growing rate, Oxynet can be considered the first working example of a collective intelligence created to automatically interpret a CPET. It has been conceived to leverage internet ubiquity to deliver human-level CPET data interpretation ability everywhere in the world.
      </p>

      <h2>Contacts and acknowledgements</h2>

      <p>
        If you are interested to the Oxynet project, visit <a href="http://oxynet.net/" target="_blank" rel="noopener noreferrer">Oxynet</a> website, send an email to oxynetcpetinterpreter(at)gmail.com or connect with me on Twitter, ResearchGate, etc.
      </p>

      <p>
        This project would have never been possible (or at least it would have been much different) without the help of Filippo Degasperi, who kindly supported Oxynet with the &ldquo;Restitution 2019&rdquo; action. Appreciation and gratitude is also expressed to the Fondazione Cassa di Risparmio di Trento e Rovereto for supporting Oxynet and the involved researchers.
      </p>
    </>
  )
}
