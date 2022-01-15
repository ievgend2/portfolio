function Maintenance() {
  return (
    <div className="top-bottom-margin website-background-black">
      <h1 className="rotate f-lg">Maintenance</h1>

      <div className="max-width text-color-white  ">
        <div className="logo">
          <div className="logo-inner">
            <a href="/portfolio">
              <div className="label-logo on-hover--40 text-color-white website-background-black"></div>
            </a>
          </div>
        </div>
        <p className="size-large">
          Sorry for the inconvenience but we&rsquo;re performing web-site
          maintenance at the moment. If you need to you can always{' '}
          <a href="#projects" className="text-color-red">
            go back{' '}
          </a>
          or{' '}
          <a href="mailto:ievgendotsenko@gmail.com" className="text-color-red">
            contact us
          </a>{' '}
          if you have any questions, otherwise we&rsquo;ll be back online
          shortly!
        </p>
        <p className="size-large">The Team</p>
      </div>
    </div>
  )
}

export default Maintenance

{
  /* <button type="button" onclick="javascript:history.back()">Back</button> */
}
