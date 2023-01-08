
export default  function Me(props) {
    return(    <div class="grid justify-center grid-cols-1 ">
    <div>
      <h1
        class="float-left p-5 font-semibold text-left text-blue-900 text-8xl font-archivo md:text-9xl"
      >
        {props.name}
      </h1>
    </div>
    <div>
      <h2
        class="float-right p-5 font-semibold text-right text-blue-900 text-8xl font-archivo md:text-9xl"
      >
        {props.lastName}
      </h2>
    </div>
    <div>
      <h2 class="px-8 py-8 text-5xl font-semibold text-right font-archivo">
        {props.title}
      </h2>
    </div>
  </div>)
}
