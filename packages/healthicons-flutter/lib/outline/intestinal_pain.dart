import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IntestinalPain extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IntestinalPain({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white"/>
<path d="M17 6C17.5523 6 18 6.44772 18 7V10.0909C18 10.4211 17.9369 10.7487 17.8137 11.0553C17.6904 11.362 17.509 11.6425 17.2783 11.8801C17.0476 12.1179 16.7721 12.3081 16.4667 12.4385C16.1612 12.5688 15.8327 12.6364 15.5002 12.6364H14.2589L14.241 12.6362C12.9736 12.6135 11.7382 13.0745 10.7732 13.938C9.81032 14.7996 9.18435 16.0022 9.02316 17.3184C8.95604 18.0386 9.03521 18.7651 9.25521 19.4512C9.47644 20.1411 9.83473 20.7736 10.3054 21.3087C10.776 21.8437 11.3483 22.2693 11.9843 22.5598C12.6203 22.8503 13.307 22.9999 14.0004 23H19C19.5523 23 20 23.4477 20 24C20 24.5523 19.5523 25 19 25H13.0004C12.307 25.0001 11.6203 25.1497 10.9843 25.4402C10.3483 25.7307 9.77598 26.1563 9.30539 26.6913C8.83473 27.2264 8.47644 27.8589 8.25521 28.5488C8.03521 29.2349 7.95604 29.9614 8.02316 30.6816C8.18435 31.9978 8.81032 33.2004 9.77319 34.062C10.1795 34.4256 10.9132 34.7699 11.8093 35.0178C12.6861 35.2603 13.5902 35.3754 14.241 35.3638L14.2589 35.3636H15.5002C15.8327 35.3636 16.1612 35.4312 16.4667 35.5615C16.7721 35.6919 17.0476 35.8821 17.2783 36.1199C17.509 36.3575 17.6904 36.638 17.8137 36.9447C17.9369 37.2513 18 37.5789 18 37.9091V41C18 41.5523 17.5523 42 17 42C16.4477 42 16 41.5523 16 41V37.9091C16 37.8334 15.9855 37.7591 15.958 37.6907C15.9305 37.6223 15.891 37.5621 15.8431 37.5127C15.7953 37.4634 15.7401 37.426 15.6816 37.401C15.6231 37.3761 15.5616 37.3636 15.5002 37.3636H14.2674C13.3965 37.378 12.3037 37.2296 11.2762 36.9454C10.2644 36.6656 9.18342 36.2181 8.43952 35.5524C7.10492 34.3582 6.25177 32.7029 6.03599 30.9082L6.03337 30.8839C5.9385 29.8903 6.04644 28.887 6.35073 27.9381C6.65503 26.9891 7.1494 26.1142 7.80367 25.3704C8.4167 24.6734 9.15758 24.1059 9.98488 23.7007C9.55387 23.391 9.15747 23.0318 8.80367 22.6296C8.1494 21.8858 7.65503 21.0109 7.35073 20.0619C7.04644 19.113 6.9385 18.1097 7.03337 17.1161L7.03599 17.0918C7.25177 15.2971 8.10492 13.6418 9.43952 12.4476C10.7726 11.2547 12.4917 10.607 14.2674 10.6364H15.5002C15.5616 10.6364 15.6231 10.6239 15.6816 10.599C15.7401 10.574 15.7953 10.5366 15.8431 10.4873C15.891 10.4379 15.9305 10.3777 15.958 10.3093C15.9855 10.2409 16 10.1666 16 10.0909V7C16 6.44772 16.4477 6 17 6Z" fill="#333333"/>
<path d="M41.8779 7.52115C42.1424 8.006 41.9637 8.61343 41.4789 8.8779L35.9789 11.8779C35.669 12.0469 35.293 12.0401 34.9895 11.8599C34.686 11.6797 34.5 11.3529 34.5 11V9.68454L30.4789 11.8779C29.994 12.1424 29.3866 11.9637 29.1221 11.4789C28.8576 10.994 29.0363 10.3866 29.5211 10.1221L35.0211 7.1221C35.331 6.9531 35.707 6.95994 36.0105 7.1401C36.314 7.32026 36.5 7.64706 36.5 8V9.31546L40.5211 7.1221C41.006 6.85764 41.6134 7.0363 41.8779 7.52115Z" fill="#333333"/>
<path d="M30.0958 33.5728C30.3318 33.0735 30.9278 32.8599 31.4272 33.0958L36.7743 35.6222C37.0941 35.7733 37.3103 36.0821 37.3429 36.4343C37.3754 36.7864 37.2196 37.1296 36.9329 37.3368L35.6105 38.2926L39.4272 40.0958C39.9265 40.3318 40.1401 40.9278 39.9042 41.4272C39.6682 41.9265 39.0722 42.1401 38.5728 41.9042L33.2257 39.3778C32.9059 39.2267 32.6897 38.9179 32.6571 38.5657C32.6245 38.2136 32.7804 37.8704 33.0671 37.6632L34.3895 36.7074L30.5728 34.9042C30.0735 34.6682 29.8599 34.0722 30.0958 33.5728Z" fill="#333333"/>
<path d="M37.878 22.1948C37.9512 21.8262 37.8116 21.4478 37.5167 21.215C37.2217 20.9822 36.8212 20.9344 36.4798 21.0913L31.5826 23.3406C31.0807 23.5711 30.8608 24.1648 31.0913 24.6667C31.3218 25.1686 31.9155 25.3886 32.4174 25.1581L35.5349 23.7262L35.122 25.8052C35.0488 26.1738 35.1884 26.5523 35.4835 26.7851C35.7785 27.0179 36.1791 27.0656 36.5206 26.9086L41.4177 24.6571C41.9195 24.4264 42.1393 23.8326 41.9086 23.3308C41.6779 22.829 41.0841 22.6093 40.5823 22.84L37.4653 24.273L37.878 22.1948Z" fill="#333333"/>
<path d="M24.003 6C24.5553 6 25.003 6.44772 25.003 7V11.6361C25.0032 12.5753 24.8237 13.5061 24.4742 14.3753C24.1247 15.2447 23.6115 16.0364 22.9626 16.7047C22.8187 16.8528 22.6574 17.0056 22.4835 17.1575C23.7479 17.4019 25.0052 17.9497 25.9592 18.9321C27.2692 20.2811 28.0001 22.1046 28.0001 24C28.0001 25.8954 27.2692 27.7189 25.9592 29.0679C24.9823 30.0739 23.7726 30.6305 22.5087 30.865C22.6656 31.0046 22.8162 31.149 22.96 31.2972C24.2689 32.6461 24.999 34.469 24.9986 36.3636V41C24.9986 41.5523 24.5509 42 23.9986 42C23.4463 42 22.9986 41.5523 22.9986 41V36.3636C22.9989 34.9806 22.4655 33.6596 21.5247 32.69C20.5287 31.6636 19.246 31.0006 17.9996 31H14C13.4477 31 13 30.5523 13 30C13 29.4477 13.4477 29 14 29H20.9971C22.3977 29 23.6356 28.5899 24.5244 27.6746C25.466 26.7049 26.0001 25.3836 26.0001 24C26.0001 22.6164 25.466 21.2951 24.5244 20.3254C23.6521 19.4271 22.2475 19 20.8152 19H16C15.4477 19 15 18.5523 15 18C15 17.4477 15.4477 17 16 17H17.8209C18.4729 16.9998 19.1193 16.8676 19.7234 16.61C20.2987 16.3647 21.0361 15.8177 21.5278 15.3114C21.9938 14.8314 22.365 14.2601 22.6186 13.6292C22.8723 12.9983 23.0032 12.3211 23.003 11.6366V7C23.003 6.44772 23.4507 6 24.003 6Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}