import React from "react"



class Project extends  React.Component {
    render() {
        return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={this.props.src} alt={this.props.name} />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{this.props.name}</div>
    <p class="text-gray-700 text-base">
      {this.props.desc}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{this.props.tag1}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{this.props.tag2}</span>

  </div>
</div>
)
    }
}



export default Project;
