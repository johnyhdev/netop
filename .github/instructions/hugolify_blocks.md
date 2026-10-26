# Hugolify Block Specifications (YAML Syntax)

## 7.0 Hero
```yaml
hero:
  video:
    controls: true
    autoplay: false
    loop: false
  surtitle: '' # string (optional) 6 - 10 words
  title: '' # string (optional) 4 - 10 words
  text: '' # string (optional) 16 - 28 words
  image:
    src: '' # string (optional)
    alt: '' # string (optional)
    background: true
    darken: true
```

## 7.1 Chart block
```yaml
blocks:
  - type: chart
    heading:
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 10 words
      text: '' # markdown (optional) 16 - 28 words
    grid: '' # [small, medium, large, container, full] (optional)
    chart:
      type: "" # string
      title: "" # string 4 - 10 words
      backgroundColor: "" # string (optional)
      borderColor: "" # string (optional)
      items:
        - label: "" # string 4 - 6 words
          value: "" # string
          color: "" # hexadecimal color (optional)
      data: # (optional)
        json: "" # text (optional)
    background: false # boolean (optional)
```

### Example
```yaml
blocks:
  - type: chart
    ui:
      grid: small
      offset: center
    heading:
      surtitle: Grid small / Type pie
      title: Chart pie example
    chart:
      type: pie
      title: Chart pie example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: medium
      offset: center
    heading:
      surtitle: Grid medium / Type bar
      title: Chart bar example
    chart:
      type: bar
      title: Chart bar example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: large
      offset: center
    heading:
      surtitle: Grid large / Type line
      title: Chart line example
    chart:
      type: line
      title: Chart line example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
    heading:
      surtitle: Grid small / Type doughnut
      title: Chart doughnut example
    chart:
      type: doughnut
      title: Chart doughnut example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
    heading:
      surtitle: Grid small / Type polarArea
      title: Chart polarArea example
    chart:
      type: polarArea
      title: Chart polarArea example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
    heading:
      surtitle: Grid small / Type radar / Custom colors
      title: Chart radar example
    chart:
      type: radar
      title: Chart radar example
      backgroundColor: 'rgba(50, 100, 150, 0.2)'
      borderColor: 'rgba(50, 100, 150)'
      items:
        - label: Eating
          value: 65
        - label: Drinking
          value: 59
        - label: Sleeping
          value: 90
        - label: Designing
          value: 81
        - label: Coding
          value: 56
        - label: Cycling
          value: 55

  - type: chart
    ui:
      grid: small
      offset: center
    heading:
      surtitle: Grid small / Type polarArea / JSON data
      title: Chart polarArea example
    text: via expert mode (json)
    chart:
      type: polarArea
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'Red',
              'Green',
              'Yellow',
              'Grey',
              'Blue'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [11, 16, 7, 3, 14],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
          };

  - type: chart
    ui:
      grid: full
    heading:
      surtitle: Grid full / Type bubble / JSON data
      title: Chart bubble example
    text: via expert mode (json)
    chart:
      type: bubble
      data:
        lang: JSON
        json: |-
          {
            datasets: [{
              label: 'First Dataset',
              data: [{
                x: 20,
                y: 30,
                r: 15
              }, {
                x: 40,
                y: 10,
                r: 10
              }],
              backgroundColor: 'rgb(255, 99, 132)'
            }]
          };

  - type: chart
    ui:
      grid: small
      offset: center
    heading:
      surtitle: Grid small / Type radar / JSON data
      title: Chart radar example
    text: via expert mode (json)
    chart:
      type: radar
      data:
        lang: JSON
        json: |-
          {
            labels: [
              'Eating',
              'Drinking',
              'Sleeping',
              'Designing',
              'Coding',
              'Cycling',
              'Running'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 90, 81, 56, 55, 40],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
              label: 'My Second Dataset',
              data: [28, 48, 40, 19, 96, 27, 100],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
          };

  - type: chart
    ui:
      grid: small
      offset: center
      theme: light
    heading:
      surtitle: Grid small / Type pie / Theme light
      title: Chart pie example
    chart:
      type: pie
      title: Chart pie example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
      theme: highlight
    heading:
      surtitle: Grid small / Type pie / Theme highlight
      title: Chart pie example
    chart:
      type: pie
      title: Chart pie example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
      theme: accent
    heading:
      surtitle: Grid small / Type pie / Theme accent
      title: Chart pie example
    chart:
      type: pie
      title: Chart pie example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
      theme: dark
    heading:
      surtitle: Grid small / Type pie / Theme dark
      title: Chart pie example
    chart:
      type: pie
      title: Chart pie example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
      theme: neutral
    heading:
      surtitle: Grid small / Type pie / Theme neutral
      title: Chart pie example
    chart:
      type: pie
      title: Chart pie example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
      theme: black
    heading:
      surtitle: Grid small / Type pie / Theme black
      title: Chart pie example
    chart:
      type: pie
      title: Chart pie example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'

  - type: chart
    ui:
      grid: small
      offset: center
      theme: white
    heading:
      surtitle: Grid small / Type pie / Theme white
      title: Chart pie example
    chart:
      type: pie
      title: Chart pie example
      items:
        - label: Example 1
          value: 60
          color: '#6699bb'
        - label: Example 2
          value: 20
          color: '#337799'
        - label: Example 3
          value: 30
          color: '#115577'
        - label: Example 4
          value: 45
          color: '#003355'
```

## 7.2 Comparison
```yaml
blocks:
  - type: comparison
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 10 words
      text: '' # markdown (optional) 16 - 28 words
    column: '' # number, columns by row in desktop
    items:
      - title: '' # string (optional) 3 - 6 words
        text: '' # string (optional) 6 - 16 words
        offer:
          price: '' # float only, no text
          discount: '' # string (e.g. 10%)
          frequency: '' # string
        arguments:
          - icon: '' # string (bootstrap icon)
            text: '' # string 6 - 12 words
        cta: # (optional)
          text: '' # string 4 - 10 words
          url: '' # url
          blank: false # boolean (optional)
          lang: '' # code lang (optional)
        is_primary: false # boolean (optional)
    background: false # boolean (optional)
```

## 7.3 Datas
```yaml
blocks:
  - type: datas
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    column: '' # number, columns by row in desktop
    show_gauge: false # boolean
    show_color: false # boolean
    items:
      - prefix: "" # string (optional) 1 - 2 words
        value: "" # number
        suffix: "" # string (optional)
        limit: 100 # number
        title: "" # string (optional) 2 - 6 words
        text: "" # string (optional) 2 - 12 words
    background: false # boolean (optional)
```

## 7.4 Editorial
```yaml
blocks:
  - type: editorial
    direction: "" # [rtl, ltr]
    surtitle: "" # string (optional) 6 - 10 words
    title: "" # string (optional) 4 - 12 words
    text: "" # string (optional) 16 - 28 words
    notes: # (optional)
      - text: "" # string (optional) 16 - 32 words
    ctas: # (optional)
      - text: '' # string 4 - 8 words
        url: '' # url
        blank: false # boolean (optional)
        lang: '' # code lang (optional)
    image: # (optional)
      src: '' # url
      filter: '' # string (optional)
      alt: '' # string (optional)
      legend: '' # string (optional)
      credit: '' # markdown (optional)
```

## 7.5 FAQ
```yaml
blocks:
  - type: faq
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    items:
      - name: "" # string (optional) 2 - 12 words
        open: false # boolean (optional)
        summary: "" # string (optional) 6 - 12 words
        title: "" # string (optional) 4 - 12 words
        text: "" # string (optional)
    background: false # boolean (optional)
```

## 7.6 Figure
```yaml
blocks:
  - type: figure
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    figure:
      src: '' # url
      alt: '' # string
      legend: '' # string
      credit: '' # markdown
      linear: false # boolean, set true for linear filter compression
      screenshot: false # boolean, set true you want add fake browser around your picture (and linear filter compression)
    grid: '' # [small, medium, large, container, full] (optional)
    offset: '' # [start, end, center] (optional)
    background: false # boolean (optional)
```

## 7.7 Gallery
```yaml
blocks:
  - type: gallery
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    column: '' # number, columns by row in desktop (optional)
    ratio: 1 # number, ratio of thumbnails format
    gallery:
      - src: '' # url
        filter: '' # string (optional)
        alt: '' # string (optional)
        legend: '' # string (optional)
        credit: '' # markdown (optional)
    background: false # boolean (optional)
```

## 7.8 Images
```yaml
blocks:
  - type: images
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    images:
      - src: '' # url
        alt: '' # string (optional)
        legend: '' # string (optional)
        credit: '' # markdown (optional)
        screenshot: false # boolean (optional)
        half: false # boolean (optional)
    background: false # boolean (optional)
```

## 7.9 Informations
```yaml
blocks:
  - type: informations
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    column: '' # number, columns by row in desktop (optional)
    items:
      - icon: '' # string (bootstrap icon)
        image: # (optional)
          src: '' # string
          alt: '' # string (optional)
          isLogo: false # boolean (optional)
        title: '' # string (optional) 2 - 8 words
        text: '' # string (optional) 4 - 12 words
        cta: # (optional)
          text: '' # string 2 - 8 words
          url: '' # url
          blank: false # boolean (optional)
          lang: '' # code lang (optional)
    background: false # boolean (optional)
```

## 7.10 Latest
```yaml
blocks:
  - type: latest
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    section: '' # string [posts, publications, products…]
    layout: '' # [grid, list] (optional)
    count: 4 # number (optional)
    show_more: true # boolean (optional)
    background: false # boolean (optional)
```

## 7.11 Logos
```yaml
blocks:
  - type: logos
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    items:
      - title: '' # string (optional) 4 - 10 words
        url: '' # url (optional)
        src: '' # url (optional)
    layout: '' # [grid, carousel] (optional)
    carousel: # object only if carousel layout (optional)
      params: # (optional)
        focus: '' # boolean (optional)
        autoplay: true # boolean (optional)
        arrows: true # boolean (optional)
        pagination: false # boolean (optional)
        type: '' # [slide, loop, fade] (optional)
        perPage: '' # number (optional)
        padding: '' # number (optional)
        gap: '' # number (optional)
      responsive: # (optional)
        breakpoints: 640 # number [640, 768, 1024, 1280, 1440]
        params:
          focus: '' # boolean (optional)
          autoplay: true # boolean (optional)
          arrows: true # boolean (optional)
          pagination: false # boolean (optional)
          type: '' # [slide, loop, fade] (optional)
          perPage: '' # number (optional)
          padding: '' # number (optional)
          gap: '' # number (optional)
    background: false # boolean (optional)
```

## 7.12 Paragraph
```yaml
blocks:
  - type: paragraph
    title: '' # string (optional) 4 - 12 words
    text: '' # markdown (optional) 16 - 46 words
    grid: '' # [small, medium, large, container, full] (optional)
    offset: '' # [start, end, center] (optional)
    align: '' # [start, end, center] (optional)
    background: false # boolean (optional)
```

## 7.13 Pushes
```yaml
blocks:
  - type: pushes
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    column: '' # [1…2]
    items:
      - title: '' # string (optional) 4 - 8 words
        text: '' # string (optional) 4 - 16 words
        cta:
          text: '' # string 2 - 6 words
          url: '' # url
          blank: false # boolean (optional)
          lang: '' # code lang (optional)
        image: # (optional)
          src: '' # url
          filter: '' # string (optional)
          alt: '' # string (optional)
          legend: '' # string (optional)
          credit: '' # markdown (optional)
        offset: '' # [start, end, center]
        card: false # boolean
        darken: false # boolean
        background_color: '' # color
        color: '' # color
    layout: '' # [grid, carousel] (optional)
    carousel: # object only if carousel layout (optional)
      params: # (optional)
        focus: '' # boolean (optional)
        autoplay: true # boolean (optional)
        arrows: true # boolean (optional)
        pagination: false # boolean (optional)
        type: '' # [slide, loop, fade] (optional)
        perPage: '' # number (optional)
        padding: '' # number (optional)
        gap: '' # number (optional)
      responsive: # (optional)
        breakpoints: 640 # number [640, 768, 1024, 1280, 1440]
        params:
          focus: '' # boolean (optional)
          autoplay: true # boolean (optional)
          arrows: true # boolean (optional)
          pagination: false # boolean (optional)
          type: '' # [slide, loop, fade] (optional)
          perPage: '' # number (optional)
          padding: '' # number (optional)
          gap: '' # number (optional)
    background: false # boolean (optional)
```

## 7.14 Selected
```yaml
blocks:
  - type: selected-posts # [selected-posts, selected-publications, selected-products…]
    section: '' # [posts, publications, products…]
    layout: '' # [grid, list] (optional)
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 26 words
    items: [] # list of slugs (e.g. ["slug-1", "slug-2"])
    show_more: false # boolean
    background: false # boolean
```

## 7.15 Testimonials
```yaml
blocks:
  - type: testimonials
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    items:
      - quote: '' # string
        author: # (optional)
          title: '' # string (optional) 4 - 8 words
          text: '' # string (optional) 4 - 38 words
          image:
            src: '' # string
            alt: '' # string (optional)
            isLogo: false # boolean (optional)
    layout: '' # [grid, carousel] (optional)
    carousel: # object only if carousel layout (optional)
      params: # (optional)
        focus: '' # boolean (optional)
        autoplay: true # boolean (optional)
        arrows: true # boolean (optional)
        pagination: false # boolean (optional)
        type: '' # [slide, loop, fade] (optional)
        perPage: '' # number (optional)
        padding: '' # number (optional)
        gap: '' # number (optional)
      responsive: # (optional)
        breakpoints: 640 # number [640, 768, 1024, 1280, 1440]
        params:
          focus: '' # boolean (optional)
          autoplay: true # boolean (optional)
          arrows: true # boolean (optional)
          pagination: false # boolean (optional)
          type: '' # [slide, loop, fade] (optional)
          perPage: '' # number (optional)
          padding: '' # number (optional)
          gap: '' # number (optional)
    background: false # boolean (optional)
```

## 7.16 Timeline
```yaml
blocks:
  - type: timeline
    heading: # (optional)
      surtitle: '' # string (optional) 6 - 10 words
      title: '' # string (optional) 4 - 12 words
      text: '' # markdown (optional) 16 - 28 words
    items:
      - surtitle: '' # string (optional) 2 - 8 words
        title: '' # string (optional) 4 - 12 words
        text: '' # markdown (optional) 6 - 28 words
    background: false # boolean (optional)
```