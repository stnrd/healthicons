import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EcoCare extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const EcoCare({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 13.8439V27.1982C32 28.6491 31.4522 29.7988 30.5513 30.5606C29.6721 31.3039 28.5378 31.6107 27.453 31.5653C26.1986 31.5128 24.8887 30.9685 24.0089 29.9518C23.7819 31.7829 24.4359 32.9993 24.7333 33.3201L25.4132 34.0535L23.9465 35.4132L23.2667 34.6799C22.4531 33.8024 21.579 31.7327 22.1382 29.0305C21.2737 29.2124 20.3664 29.2101 19.5428 29.0356C18.6461 28.8457 17.7644 28.437 17.0959 27.7503C16.4116 27.0473 16 26.1007 16 24.9585C16 23.3147 16.5875 22.1267 17.6358 21.259C18.6065 20.4556 19.9228 19.9744 21.2546 19.5434C21.5669 19.4423 21.886 19.3421 22.2108 19.2402C24.7495 18.4432 27.6352 17.5372 30.3541 15.2366L32 13.8439ZM24.9612 27.1357C25.3821 26.3638 25.961 25.5381 26.7433 24.669L27.4122 23.9257L25.9256 22.5877L25.2567 23.331C24.2663 24.4315 23.5435 25.5003 23.0317 26.5161C22.2804 27.0684 21.07 27.3147 19.9572 27.079C19.3539 26.9512 18.8606 26.6959 18.5291 26.3553C18.2134 26.0311 18 25.5871 18 24.9585C18 23.8731 18.35 23.2642 18.9111 22.7997C19.5497 22.2711 20.5147 21.885 21.8704 21.4462C22.166 21.3506 22.4755 21.2539 22.7971 21.1534C24.8759 20.5041 27.4561 19.6982 30 18.0016V27.1982C30 28.1132 29.6728 28.6842 29.2599 29.0333C28.8253 29.4008 28.207 29.5951 27.5366 29.567C26.2088 29.5115 25.0269 28.6434 24.9612 27.1357Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 41C23.565 41.9004 23.5647 41.9003 23.5643 41.9001L23.5631 41.8995L23.5596 41.8978L23.5476 41.892L23.5046 41.8708C23.4675 41.8524 23.4139 41.8256 23.3448 41.7905C23.2066 41.7203 23.0066 41.6168 22.7535 41.4809C22.2474 41.2091 21.5285 40.8075 20.6675 40.2833C18.9476 39.2362 16.6501 37.6935 14.3478 35.7128C9.78359 31.7861 5 25.9628 5 18.7241C5 15.4709 6.07675 12.32 7.92147 9.96432C9.77093 7.60258 12.4324 6 15.5625 6C19.2794 6 22.1009 8.10708 24 11.0778C25.899 8.10722 28.7205 6 32.4375 6C35.5679 6 38.2294 7.60286 40.0788 9.96473C41.9234 12.3205 43 15.4714 43 18.7241C43 25.6882 38.2081 31.5124 33.6589 35.4969C31.36 37.5105 29.0658 39.1045 27.3484 40.1946C26.4887 40.7404 25.7709 41.1614 25.2659 41.4472C25.0134 41.5901 24.8138 41.6993 24.6761 41.7734C24.6073 41.8105 24.5539 41.8388 24.5171 41.8581L24.4744 41.8805L24.4626 41.8866L24.458 41.889C24.4576 41.8892 24.4573 41.8893 24 41ZM9.49611 11.1974C7.94122 13.183 7 15.8942 7 18.7241C7 25.0658 11.2164 30.3805 15.6522 34.1966C17.8499 36.0873 20.0524 37.5673 21.7075 38.575C22.534 39.0782 23.2213 39.462 23.6996 39.7188C23.806 39.7759 23.9019 39.8267 23.9868 39.8712C24.0734 39.8233 24.1717 39.7684 24.281 39.7066C24.7603 39.4353 25.4488 39.0315 26.2766 38.5061C27.9342 37.4539 30.14 35.9203 32.3411 33.9924C36.7919 30.0941 41 24.7804 41 18.7241C41 15.8947 40.0589 13.1834 38.5041 11.1977C36.954 9.2181 34.8343 8 32.4375 8C29.1236 8 26.5584 10.1674 24.8983 13.5606L24 15.3965L23.1018 13.5606C21.4414 10.1672 18.8763 8 15.5625 8C13.166 8 11.0463 9.21789 9.49611 11.1974Z" fill="#333333"/>
<path d="M24 41L24.458 41.889L24.0139 42.1173L23.5643 41.9001L24 41Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}