import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GlobalPandemic extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const GlobalPandemic({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM30.0886 7.0306C26.9407 5.91779 23.5474 5.70125 20.2846 6.40489C17.0217 7.10853 14.0161 8.705 11.6009 11.0179C9.313 13.2089 7.63948 15.9618 6.74363 19H15.1489C15.9444 18.9985 16.7168 19.2644 17.3438 19.7543C17.971 20.2443 18.4165 20.9302 18.6109 21.7024L18.6116 21.7053L19.895 26.8676C20.0252 27.3949 20.0345 27.9449 19.9219 28.4762C19.8094 29.0076 19.578 29.5065 19.2448 29.9352C18.9116 30.364 18.4853 30.7112 17.998 30.9501C17.5107 31.189 16.9755 31.3132 16.4329 31.313H15.4085L13.8567 39.1229C15.9585 40.5696 18.3488 41.559 20.8735 42.016C21.417 42.1144 21.7778 42.6347 21.6794 43.1781C21.581 43.7216 21.0607 44.0824 20.5173 43.984C16.8683 43.3235 13.473 41.6622 10.7076 39.1845C7.94211 36.7069 5.91434 33.5098 4.84838 29.9475C3.78242 26.3852 3.71974 22.5964 4.66726 19.0005C5.61478 15.4047 7.53564 12.1418 10.2176 9.57346C12.8995 7.0051 16.2378 5.23159 19.8629 4.44983C23.4881 3.66807 27.2581 3.90869 30.7552 5.14496C34.2523 6.38121 37.3398 8.5647 39.6758 11.4531C42.0118 14.3415 43.5054 17.8221 43.9914 21.5093C44.0636 22.0569 43.6782 22.5592 43.1307 22.6314C42.5831 22.7036 42.0808 22.3183 42.0086 21.7707C41.5839 18.5495 40.3061 15.504 38.3113 12.9506C38.2134 12.9827 38.1087 13 38 13H31.5112C31.218 12.9997 30.9251 13.1032 30.6797 13.3067C30.4331 13.5111 30.2478 13.8063 30.1662 14.1521L28.9735 19.2287C28.8472 19.7664 28.3089 20.0998 27.7713 19.9735C27.2336 19.8472 26.9002 19.3089 27.0265 18.7713L28.2193 13.694C28.3971 12.9404 28.8094 12.2592 29.4033 11.7669C29.9983 11.2737 30.7405 10.9994 31.5127 11H36.5453C34.7024 9.2402 32.5038 7.88436 30.0886 7.0306ZM12.0924 37.7398L13.6068 30.1181C13.6998 29.6501 14.1105 29.313 14.5876 29.313H16.4329C16.6698 29.3131 16.9042 29.2589 17.1176 29.1543C17.331 29.0497 17.5186 28.8972 17.6656 28.7079C17.8127 28.5187 17.9154 28.2978 17.9653 28.0618C18.0153 27.8261 18.0112 27.582 17.9535 27.3481L16.6714 22.1908L16.6711 22.1893C16.5846 21.8472 16.3875 21.5452 16.1124 21.3302C15.8371 21.1151 15.4991 20.9992 15.1521 21L6.2747 21C5.78559 23.7845 5.95011 26.6528 6.76444 29.3741C7.72491 32.5839 9.55174 35.4638 12.0421 37.6949L12.0924 37.7398ZM31.9959 37.3084C34.1797 36.9012 35.9012 35.1797 36.3084 32.9959C36.3385 32.9986 36.3691 33 36.4 33H39.0049C39.0551 33.5053 39.4815 33.9 40 33.9C40.5523 33.9 41 33.4523 41 32.9V31.1C41 30.5477 40.5523 30.1 40 30.1C39.4815 30.1 39.0551 30.4947 39.0049 31H36.4C36.3691 31 36.3385 31.0014 36.3084 31.0041C36.1687 30.255 35.8744 29.5603 35.4598 28.9544L37.3 27.1142L37.4929 27.3071C37.8834 27.6976 38.5166 27.6976 38.9071 27.3071C39.2976 26.9166 39.2976 26.2834 38.9071 25.8929L37.1071 24.0929C36.7166 23.7024 36.0834 23.7024 35.6929 24.0929C35.3024 24.4834 35.3024 25.1166 35.6929 25.5071L35.8858 25.7L34.0456 27.5402C33.4408 27.1264 32.7475 26.8324 32 26.6924V23.9951C32.5053 23.9449 32.9 23.5185 32.9 23C32.9 22.4477 32.4523 22 31.9 22H30.1C29.5477 22 29.1 22.4477 29.1 23C29.1 23.5185 29.4947 23.9449 30 23.9951V26.6924C29.2525 26.8324 28.5592 27.1264 27.9544 27.5402L26.1142 25.7L26.3071 25.5071C26.6976 25.1166 26.6976 24.4834 26.3071 24.0929C25.9166 23.7024 25.2834 23.7024 24.8929 24.0929L23.0929 25.8929C22.7024 26.2834 22.7024 26.9166 23.0929 27.3071C23.4834 27.6976 24.1166 27.6976 24.5071 27.3071L24.7 27.1142L26.5402 28.9544C26.1256 29.5603 25.8313 30.255 25.6916 31.0041C25.6615 31.0014 25.6309 31 25.6 31H22.9951C22.9449 30.4947 22.5185 30.1 22 30.1C21.4477 30.1 21 30.5477 21 31.1V32.9C21 33.4523 21.4477 33.9 22 33.9C22.5185 33.9 22.9449 33.5053 22.9951 33H25.6C25.6309 33 25.6615 32.9986 25.6916 32.9959C25.8313 33.745 26.1256 34.4397 26.5402 35.0456L24.7 36.8858L24.5071 36.6929C24.1166 36.3024 23.4834 36.3024 23.0929 36.6929C22.7024 37.0834 22.7024 37.7166 23.0929 38.1071L24.8929 39.9071C25.2834 40.2976 25.9166 40.2976 26.3071 39.9071C26.6976 39.5166 26.6976 38.8834 26.3071 38.4929L26.1142 38.3L27.9544 36.4598C28.5603 36.8744 29.255 37.1687 30.0041 37.3084C30.0014 37.3385 30 37.3691 30 37.4V40.0049C29.4947 40.0551 29.1 40.4815 29.1 41C29.1 41.5523 29.5477 42 30.1 42H31.9C32.4523 42 32.9 41.5523 32.9 41C32.9 40.4815 32.5053 40.0551 32 40.0049V37.4C32 37.3691 31.9986 37.3385 31.9959 37.3084ZM36.5929 39.9071C36.2024 39.5166 36.2024 38.8834 36.5929 38.4929L36.7858 38.3L34.7929 36.3071L36.2071 34.8929L38.2 36.8858L38.3929 36.6929C38.7834 36.3024 39.4166 36.3024 39.8071 36.6929C40.1976 37.0834 40.1976 37.7166 39.8071 38.1071L38.0071 39.9071C37.6166 40.2976 36.9834 40.2976 36.5929 39.9071Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}