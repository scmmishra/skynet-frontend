<script lang="ts" setup>
import Card from "../components/Base/Card.vue";
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <Card class="p-8 space-y-8">
      <article class="prose lg:prose-md mx-auto">
        <h1 class="font-normal text-3xl leading-8 text-black-999">
          Core Web Vitals
        </h1>
        <p>
          Core Web Vitals evaluate speed, responsiveness, and visual stability
          of pages and prioritise the site in rankings based on the outcomes of
          these scores. This means your site performance has a direct impact on
          SEO and your business.
        </p>
        <p><img src="/cwv.webp" alt="Core Web Vitals" /></p>
        <p>
          Core Web Vitals are the subset of Web Vitals that apply to all web
          pages, should be measured by all site owners, and will be surfaced
          across all Google tools. Each of the Core Web Vitals represents a
          distinct facet of the user experience, is measurable in the field, and
          reflects the real-world experience of a critical user-centric outcome.
        </p>
        <h2 id="types-of-metrics">Types of metrics</h2>
        <p>
          There are several other types of metrics that are relevant to how
          users perceive performance.
        </p>
        <ul>
          <li>
            <strong>Perceived load speed:</strong> how quickly a page can load
            and render all of its visual elements to the screen.
          </li>
          <li>
            <strong>Load responsiveness:</strong> how quickly a page can load
            and execute any required JavaScript code in order for components to
            respond quickly to user interaction
          </li>
          <li>
            <strong>Runtime responsiveness:</strong> after page load, how
            quickly can the page respond to user interaction.
          </li>
          <li>
            <strong>Visual stability:</strong> do elements on the page shift in
            ways that users don&#39;t expect and potentially interfere with
            their interactions?
          </li>
          <li>
            <strong>Smoothness:</strong> do transitions and animations render at
            a consistent frame rate and flow fluidly from one state to the next?
          </li>
        </ul>
        <h2 id="metrics">Metrics</h2>
        <h3 id="first-contentful-paint">First Contentful Paint</h3>
        <p>
          When the browser renders the first bit of content from the DOM,
          providing the first feedback to the user that the page is actually
          loading.
        </p>
        <p>
          Used for measuring <strong>perceived load speed</strong> because it
          marks the first point in the page load timeline where the user can see
          anything on the screen—a fast FCP helps reassure the user that
          something is happening.
        </p>
        <h3 id="largest-contentful-paint">Largest Contentful Paint</h3>
        <p>
          Measures loading performance. To provide a good user experience, LCP
          should occur within 2.5 seconds of when the page first starts loading.
        </p>
        <p>
          Used for measuring <strong>perceived load speed</strong> because it
          marks the point in the page load timeline when the page&#39;s main
          content has likely loaded—a fast LCP helps reassure the user that the
          page is useful.
        </p>
        <h3 id="cumulative-layout-shift">Cumulative Layout Shift</h3>
        <p>
          Measures the sum total of all individual layout shift scores for every
          unexpected layout shift that occurs during the entire lifespan of the
          page.
        </p>
        <p>
          Used for measuring <strong>visual stability</strong> because it helps
          quantify how often users experience unexpected layout shifts—a low CLS
          helps ensure that the page is delightful.
        </p>
        <h3 id="first-input-delay">First Input Delay</h3>
        <p>
          Measures the time from the first user interaction to when the browser
          begins processing event handlers in response to that interaction.
        </p>
        <p>
          Used for measuring <strong>load</strong
          ><a
            href="https://web.dev/user-centric-performance-metrics/#types-of-metrics"
          >
          </a
          ><strong>responsiveness</strong> because it quantifies the experience
          users feel when trying to interact with unresponsive pages—a low FID
          helps ensure that the page is usable.
        </p>
        <h3 id="time-to-interactive">Time to Interactive</h3>
        <p>
          Measures the time from when the page starts loading to when it&#39;s
          visually rendered, its initial scripts (if any) have loaded, and
          it&#39;s capable of reliably responding to user input quickly.
        </p>
        <h3 id="total-blocking-time">Total blocking time</h3>
        <p>
          Measures the total amount of time between FCP and TTI where the main
          thread was blocked for long enough to prevent input responsiveness.
        </p>
        <h2 id="references">References</h2>
        <ul>
          <li>
            <p>
              <a href="https://web.dev/defining-core-web-vitals-thresholds/"
                >Defining the Core Web Vitals metrics thresholds</a
              >
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://web.dev/user-centric-performance-metrics/#types-of-metrics"
                >User-centric performance metrics</a
              >
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://web.dev/user-centric-performance-metrics/#important-metrics-to-measure"
                >User-centric performance metrics</a
              >
            </p>
          </li>
        </ul>
      </article>
    </Card>
  </main>
</template>
