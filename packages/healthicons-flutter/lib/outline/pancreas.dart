import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pancreas extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Pancreas({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7372 10.1158C21.5162 9.99251 21.327 9.96591 21.0976 10.0449C21.0528 10.0603 21.0116 10.0772 20.9738 10.0958L20.9736 10.0969L20.9704 10.0987L20.9561 10.1067L20.8968 10.1403C20.8921 10.143 20.8872 10.1457 20.8821 10.1486C20.7173 10.2597 20.6306 10.4208 20.5769 10.6626C20.488 11.0626 20.5257 11.5898 20.6192 12.1826C20.7258 12.8586 21.0822 13.8126 21.5931 14.4534C21.8441 14.7683 22.0821 14.9446 22.2803 15.0189C22.4451 15.0807 22.6379 15.0962 22.9142 14.9665C23.3316 14.7706 23.59 14.2911 23.4828 13.3274C23.3785 12.3899 22.9429 11.4013 22.547 10.8876C22.2665 10.5237 21.9931 10.2586 21.7372 10.1158ZM19.8333 8.44441C20.0147 8.33045 20.2185 8.23229 20.4468 8.15372C21.2971 7.86107 22.0765 8.01492 22.7116 8.36922C23.3117 8.70403 23.7819 9.21362 24.131 9.66665C24.7559 10.4774 25.3268 11.8137 25.4706 13.1063C25.5751 14.0457 25.4634 15.1993 24.7474 16.038C26.5869 15.9766 28.0521 16.1595 29.4539 16.3375L29.5027 16.3437C30.963 16.5292 32.3551 16.706 34.1396 16.6392C34.9694 16.6082 35.6776 16.4418 36.4445 16.2617C36.6536 16.2125 36.8671 16.1624 37.0886 16.1137C38.0849 15.8945 39.2008 15.7223 40.4491 16.0905C40.8664 16.2136 41.2367 16.4338 41.515 16.7677C41.7909 17.0988 41.9249 17.4796 41.9749 17.8425C42.0697 18.5294 41.8789 19.253 41.6597 19.8382C41.2096 21.0401 40.4162 22.2243 40.1268 22.6331C39.1372 24.0312 37.9755 24.8242 36.718 25.2359C35.4937 25.6366 34.2346 25.656 33.0915 25.6158C32.7561 25.604 32.4356 25.5878 32.1259 25.5721C31.327 25.5315 30.5998 25.4947 29.8737 25.5476C29.3883 25.5829 28.9377 25.6581 28.5172 25.794C28.7512 25.8384 28.9843 25.8966 29.2166 25.9686C31.1108 26.5551 32.78 28.0069 34.3501 29.9242C34.5832 30.1622 34.7646 30.4151 34.9001 30.7094C35.0374 31.0076 35.1082 31.3079 35.1604 31.5912C35.3033 32.3669 35.0838 33.1509 34.7571 33.8014C34.423 34.4665 33.9272 35.0945 33.362 35.602C32.8009 36.1059 32.1214 36.5353 31.3969 36.7399C30.6612 36.9477 29.8079 36.9367 29.0552 36.4299C28.6631 36.1659 28.4245 35.7445 28.316 35.5367C28.2658 35.4406 28.2241 35.351 28.1915 35.2767C27.6189 34.699 27.2487 34.409 26.9357 34.2658C26.7115 34.1632 26.4745 34.1167 26.1088 34.1692C26.0454 34.2311 25.9698 34.3042 25.8834 34.3866C25.605 34.6523 25.212 35.0166 24.7527 35.4124C23.8545 36.1863 22.6275 37.1466 21.4825 37.6836C19.159 38.7733 16.8096 39.2557 14.5694 38.8668C12.3096 38.4744 10.2768 37.2151 8.57649 35.0381C4.31957 29.5877 5.85717 21.7554 9.40518 16.7647C10.9247 14.6272 13.6198 12.5136 15.8418 10.9738C16.9691 10.1927 18.0053 9.53867 18.7599 9.07979C19.1374 8.85015 19.4453 8.66889 19.6597 8.5445C19.727 8.50546 19.7851 8.47201 19.8333 8.44441ZM24.9074 32.5441L25.1119 32.3357L25.3966 32.2702C26.2377 32.0767 26.9998 32.0956 27.768 32.4472C27.9095 32.512 28.0478 32.5867 28.1839 32.6702C28.3629 32.2282 28.6572 31.7988 28.9695 31.4287C29.3719 30.9519 29.8784 30.4863 30.4221 30.1115C30.7017 29.9188 31.0079 29.7385 31.3295 29.5937C30.3996 28.7204 29.507 28.1522 28.625 27.8791C27.3439 27.4824 25.9201 27.6595 24.1646 28.7861L24.1542 28.7928L19.1876 31.8093L19.0669 31.8459L18.7763 30.8891C19.0669 31.8459 19.0669 31.8459 19.0669 31.8459L19.0658 31.8463L19.0598 31.8481L19.0457 31.8523L18.9978 31.8662C18.9574 31.8777 18.9007 31.8936 18.8308 31.9121C18.6916 31.949 18.4971 31.9973 18.2744 32.0433C17.8575 32.1294 17.2354 32.2307 16.6864 32.1792C15.994 32.1142 15.3456 31.9751 14.7381 31.6723C14.1229 31.3657 13.6101 30.9218 13.1434 30.3314C12.2016 29.14 12.0943 28.0526 12.0724 26.7839C12.0518 25.5883 12.3049 24.6227 12.7866 23.7373C13.2501 22.8853 13.9104 22.1396 14.6214 21.3746C16.0294 19.8596 18.2447 18.172 19.9781 16.9401C20.0376 16.8935 20.0993 16.85 20.1627 16.8093C20.3599 16.6701 20.551 16.5366 20.7343 16.4097C20.4644 16.1976 20.2299 15.952 20.0291 15.7001C19.2638 14.74 18.7936 13.4453 18.6436 12.4941C18.601 12.224 18.5585 11.9108 18.5385 11.5778C18.0571 11.8878 17.5299 12.2373 16.9809 12.6177C14.7748 14.1464 12.3365 16.0931 11.0352 17.9235C7.76866 22.5183 6.65143 29.3241 10.1527 33.807C11.5931 35.6513 13.2088 36.6006 14.9115 36.8962C16.6337 37.1953 18.5605 36.8449 20.6333 35.8729C21.5164 35.4587 22.5709 34.6523 23.4472 33.8972C23.8751 33.5285 24.2426 33.1878 24.5029 32.9396C24.6328 32.8156 24.7354 32.7153 24.8048 32.6466C24.8396 32.6122 24.8659 32.5858 24.8833 32.5684L24.9024 32.5492L24.9074 32.5441ZM21.2696 18.4761C21.2326 18.5023 21.1955 18.5286 21.1581 18.5551C19.4274 19.7842 17.3484 21.3782 16.0864 22.7362C15.3713 23.5055 14.8731 24.0871 14.5434 24.6931C14.232 25.2655 14.0573 25.8884 14.0721 26.7495C14.0916 27.8815 14.1837 28.4223 14.7124 29.0911C15.033 29.4967 15.3262 29.7308 15.6301 29.8822C15.9417 30.0375 16.3257 30.1365 16.8733 30.1879C17.1087 30.21 17.4848 30.1641 17.87 30.0846C18.0484 30.0478 18.206 30.0086 18.3185 29.9788C18.3381 29.9736 18.3561 29.9688 18.3727 29.9643L23.0634 27.1153L26.1613 24.7892C27.2931 23.9394 28.5314 23.6401 29.7284 23.5528C30.588 23.4902 31.4997 23.5366 32.3387 23.5793C32.623 23.5938 32.8989 23.6078 33.1617 23.617C34.2573 23.6555 35.2219 23.6212 36.0958 23.3351C36.9364 23.06 37.7473 22.5331 38.4944 21.4777C38.7602 21.1021 39.4301 20.0889 39.7868 19.1367C39.971 18.6449 40.0194 18.3023 39.9937 18.1159C39.9884 18.0778 39.9816 18.0574 39.9777 18.0484C39.9667 18.0408 39.9393 18.0253 39.8833 18.0088C39.1352 17.7881 38.4304 17.8664 37.5182 18.067C37.3502 18.1039 37.1725 18.146 36.9859 18.1901C36.201 18.3758 35.2581 18.5988 34.2143 18.6378C32.2648 18.7107 30.7351 18.5164 29.2845 18.332L29.202 18.3216C27.7295 18.1346 26.3281 17.9627 24.5277 18.0485L24.4851 18.0505L24.4425 18.0489C24.001 18.0323 23.2797 18.0441 22.5894 18.1329C22.2448 18.1772 21.9298 18.238 21.6715 18.3151C21.4722 18.3746 21.3441 18.4329 21.2696 18.4761ZM30.0172 34.4597C30.0357 34.5027 30.06 34.5558 30.0888 34.6108C30.1237 34.6777 30.1575 34.7328 30.1861 34.7714C30.191 34.778 30.1952 34.7834 30.1986 34.7875C30.333 34.8671 30.5332 34.9056 30.8534 34.8152C31.2064 34.7155 31.6235 34.4751 32.0258 34.1139C32.4242 33.7562 32.7588 33.3238 32.9698 32.9037C33.1882 32.4689 33.2284 32.1428 33.1935 31.9537C33.1526 31.7318 33.118 31.6211 33.0833 31.5457C33.0545 31.483 33.0103 31.4114 32.9032 31.3055L32.9017 31.304C32.8842 31.2864 32.8282 31.23 32.5898 31.2728C32.3231 31.3206 31.9607 31.48 31.5572 31.7582C31.1635 32.0296 30.7885 32.3743 30.498 32.7186C30.1918 33.0814 30.0464 33.364 30.0097 33.5019C29.9799 33.6139 29.9687 33.8453 29.9861 34.1272C29.9938 34.2523 30.0055 34.3641 30.0153 34.4442C30.0159 34.4495 30.0165 34.4547 30.0172 34.4597Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}