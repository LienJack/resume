import { indicator, data  as radarData } from 'mock/radar.data.js'
import treeData from 'mock/tree.data.js'

export const radarOption = {
  radar: {
    name: {
        textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
       }
    },
    indicator: indicator 
},
series: [{
    type: 'radar',
    data : radarData
}]

}

export const treeOption = {
  series: [
      {
          type: 'tree',

          data: [treeData],

          top: '1%',
          left: '15%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
              normal: {
                  position: 'top',
                  verticalAlign: 'middle',
                  align: 'right',
                  fontSize: 12,
              }
          },

          leaves: {
              label: {
                  normal: {
                      position: 'right',
                      verticalAlign: 'middle',
                      align: 'left',
                      fontSize: 12,
                  }
              }
          },

          expandAndCollapse: true,
          // animationDuration: 550,
          // animationDurationUpdate: 750
      }
  ]
}