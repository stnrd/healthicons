import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Agriculture extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Agriculture({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.9407 7.45665L40.9531 7.2997L40.6941 6.33384L42.1826 5.93457L41.9407 7.45665ZM28.7204 21.2871C27.8688 21.8114 27.8687 21.8111 27.8685 21.8109L27.8672 21.8088L27.8643 21.804L27.8546 21.7881L27.8205 21.7313C27.7916 21.6826 27.7505 21.6128 27.6997 21.5239C27.598 21.3464 27.4569 21.0926 27.2952 20.7809C26.9732 20.1603 26.5629 19.298 26.2212 18.3457C25.8825 17.4019 25.5931 16.3208 25.5483 15.2746C25.5037 14.2327 25.6988 13.1017 26.4735 12.2159C27.1709 11.4185 28.4852 10.6864 29.8655 10.0515C31.2972 9.39301 32.9809 8.76105 34.5761 8.21382C36.1748 7.66536 37.7028 7.19587 38.8297 6.86378C39.3937 6.6976 39.8583 6.5655 40.1826 6.47479C40.3447 6.42942 40.4718 6.39439 40.5588 6.3706L40.6585 6.34345L40.6941 6.33384C40.6942 6.33379 40.6941 6.33384 40.9531 7.2997C41.9407 7.45665 41.9408 7.4565 41.9407 7.45665L41.9348 7.49397L41.9177 7.5997C41.9026 7.69206 41.8804 7.82727 41.8516 7.99977C41.794 8.34473 41.7099 8.83901 41.6036 9.43806C41.391 10.6354 41.0891 12.2549 40.7323 13.9389C40.3762 15.6193 39.9619 17.3807 39.5232 18.8558C39.3041 19.5926 39.0741 20.2745 38.8363 20.8465C38.608 21.3956 38.3379 21.9305 38.0102 22.3053C37.3078 23.1084 36.2145 23.3592 35.2604 23.4231C34.2638 23.4898 33.1609 23.3685 32.167 23.1938C31.164 23.0174 30.2242 22.7778 29.5387 22.5837C29.1948 22.4864 28.9121 22.3997 28.7141 22.337C28.6151 22.3056 28.5371 22.2802 28.4831 22.2623L28.4203 22.2413L28.403 22.2355L28.3981 22.2338L28.3965 22.2332C28.3963 22.2332 28.3956 22.2329 28.7204 21.2871ZM28.7204 21.2871L27.8685 21.8109L28.0567 22.1165L28.3965 22.2332L28.7204 21.2871ZM29.3917 20.4536C29.5675 20.5086 29.8032 20.58 30.0834 20.6593C30.7283 20.8419 31.5984 21.0631 32.5133 21.224C33.4374 21.3865 34.3607 21.4788 35.1269 21.4275C35.9357 21.3734 36.342 21.1747 36.5047 20.9887C36.6094 20.8689 36.7792 20.5847 36.9895 20.0787C37.1903 19.5956 37.3977 18.9866 37.6062 18.2857C38.0227 16.8852 38.4242 15.1833 38.7757 13.5242C39.1266 11.8687 39.4242 10.2722 39.6343 9.08852C39.6589 8.95035 39.6822 8.81785 39.7043 8.6916C39.605 8.72052 39.5019 8.75074 39.3951 8.78222C38.2861 9.10899 36.7878 9.56951 35.2251 10.1056C33.6588 10.6429 32.046 11.25 30.7012 11.8686C29.3049 12.5107 28.3628 13.0936 27.979 13.5325C27.6724 13.883 27.5136 14.4218 27.5465 15.1891C27.5791 15.9522 27.7984 16.8198 28.1036 17.6702C28.4057 18.512 28.7744 19.2893 29.0705 19.8598C29.1954 20.1005 29.3061 20.3021 29.3917 20.4536ZM10.2631 9.97441L10.004 10.9403L9.0164 11.0972L8.7745 9.57514L10.2631 9.97441ZM19.9445 22.3067C20.7961 22.8309 20.7962 22.8307 20.7963 22.8304L20.7975 22.8285L20.8001 22.8243L20.8083 22.8108L20.8367 22.7634C20.8608 22.723 20.8947 22.6653 20.9366 22.5922C21.0202 22.446 21.1362 22.2374 21.2689 21.9816C21.5331 21.4726 21.8704 20.7639 22.1518 19.9797C22.4301 19.204 22.6719 18.3054 22.7094 17.4288C22.7467 16.5564 22.5848 15.5819 21.9114 14.8119C21.3153 14.1303 20.2124 13.5214 19.0923 13.0062C17.9207 12.4673 16.5458 11.9515 15.2469 11.5058C13.9443 11.059 12.7 10.6767 11.7825 10.4063C11.3233 10.271 10.9449 10.1634 10.6806 10.0895C10.5485 10.0525 10.4449 10.0239 10.3739 10.0045L10.2924 9.98234L10.2631 9.97441C10.2629 9.97437 10.2631 9.97441 10.004 10.9403C9.0164 11.0972 9.01638 11.0971 9.0164 11.0972L9.02131 11.1279L9.03527 11.2141C9.04752 11.2894 9.06559 11.3996 9.08905 11.54C9.13595 11.8209 9.20442 12.2232 9.29095 12.7107C9.46388 13.6849 9.7096 15.0031 10.0001 16.3742C10.29 17.7418 10.6278 19.1786 10.9864 20.3843C11.1654 20.9864 11.3544 21.5473 11.5512 22.0205C11.7383 22.4707 11.9672 22.929 12.2545 23.2574C12.8758 23.9678 13.8285 24.1765 14.6174 24.2293C15.4489 24.285 16.362 24.1837 17.1762 24.0406C17.9995 23.8958 18.7697 23.6993 19.3306 23.5406C19.6122 23.4609 19.8438 23.3899 20.0062 23.3384C20.0875 23.3127 20.1516 23.2917 20.1962 23.277L20.2483 23.2596L20.2628 23.2547L20.2685 23.2527C20.2686 23.2527 20.2693 23.2524 19.9445 22.3067ZM19.9445 22.3067L20.7963 22.8304L20.6082 23.136L20.2685 23.2527L19.9445 22.3067ZM19.2721 21.4725C19.3346 21.3604 19.4102 21.2213 19.4937 21.0604C19.7318 20.6016 20.0275 19.9779 20.2693 19.3041C20.5142 18.6219 20.6858 17.9369 20.7112 17.3433C20.7368 16.7455 20.6112 16.3632 20.4059 16.1285C20.1234 15.8055 19.3927 15.3458 18.2566 14.8232C17.1719 14.3244 15.868 13.8333 14.5979 13.3976C13.3494 12.9693 12.1512 12.6004 11.2557 12.3361C11.2572 12.3444 11.2587 12.3528 11.2602 12.3611C11.4307 13.3218 11.6722 14.6169 11.9567 15.9596C12.242 17.3058 12.567 18.6831 12.9034 19.8142C13.0718 20.3804 13.2382 20.8685 13.3979 21.2527C13.5672 21.6598 13.6957 21.8673 13.7599 21.9408C13.8415 22.0341 14.1074 22.1907 14.751 22.2338C15.3521 22.274 16.0855 22.2017 16.8299 22.0708C17.5651 21.9415 18.2657 21.7634 18.7859 21.6162C18.9759 21.5624 19.1405 21.5131 19.2721 21.4725ZM17.0817 31.0066C16.8282 31.0211 16.7036 31.0572 16.6728 31.0711C16.2194 31.276 14.8432 31.7556 13.6553 32.1612C13.045 32.3695 12.46 32.5665 12.0278 32.7113C12.0185 32.7144 12.0092 32.7176 12 32.7206V38.1235C12.1759 38.1165 12.3646 38.1092 12.5583 38.1022C13.3861 38.0721 14.3715 38.0428 14.7983 38.0598C16.5905 38.1314 17.9358 38.5555 19.1821 38.9484L19.2086 38.9568C20.3767 39.325 21.4587 39.6633 22.8761 39.7698C23.2765 39.7999 23.6646 39.8385 24.0277 39.8747L24.0325 39.8752C25.4273 40.0142 26.3451 40.0851 27.0556 39.827C27.6094 39.6259 29.6337 38.6874 31.6761 37.6601C32.6856 37.1523 33.6758 36.6347 34.4634 36.1916C34.8579 35.9697 35.1926 35.7715 35.4498 35.6061C35.5784 35.5234 35.6809 35.4532 35.7585 35.3958C35.7969 35.3673 35.8261 35.3443 35.8473 35.3266C35.8693 35.3082 35.8772 35.3001 35.8757 35.3017C35.9751 35.2006 36.0815 34.8494 35.9102 34.5179C35.8412 34.3844 35.7269 34.2613 35.5335 34.1777C35.3334 34.0913 34.9931 34.0244 34.4527 34.1131C33.2346 34.3129 31.7803 34.899 30.3274 35.4902L30.3063 35.4987C29.5926 35.7891 28.8768 36.0804 28.2421 36.292C27.6323 36.4952 26.9547 36.6767 26.3651 36.6414C25.5546 36.5929 24.1336 36.3815 22.962 36.1922C22.366 36.0959 21.8179 36.0025 21.4189 35.9332C21.2194 35.8986 21.0568 35.8699 20.944 35.8499L20.8137 35.8266L20.7681 35.8184L20.9571 33.8343L25.5287 33.8891C25.5309 33.889 25.5338 33.8887 25.5375 33.8884C25.561 33.8863 25.6155 33.8797 25.6958 33.859C25.8541 33.8183 26.1249 33.72 26.4655 33.4788C26.5712 33.4039 26.7091 33.2659 26.8376 33.0806C26.8909 33.0038 26.9365 32.9277 26.9741 32.8555C26.3582 32.8207 25.7686 32.7179 25.3184 32.6205C25.0378 32.5597 24.8015 32.4989 24.6338 32.4528C24.5498 32.4297 24.4825 32.4102 24.435 32.3961C24.4222 32.3922 24.4108 32.3888 24.4009 32.3858L18.8038 31.1405C18.7922 31.1385 18.7744 31.1354 18.751 31.1315C18.7027 31.1234 18.6309 31.112 18.5417 31.0991C18.3621 31.0732 18.1172 31.0424 17.8525 31.0221C17.5848 31.0016 17.3154 30.9932 17.0817 31.0066ZM19.0007 30.1599L19.1825 29.1766L19.2003 29.1798L24.9177 30.4519L24.9601 30.4653L24.9679 30.4678L25.006 30.4793C25.041 30.4897 25.0946 30.5053 25.1639 30.5243C25.3028 30.5625 25.5029 30.6141 25.7414 30.6657C26.2274 30.7709 26.8346 30.8678 27.397 30.8678C27.9602 30.8678 28.5718 31.0771 28.9017 31.6763C29.1837 32.1883 29.1142 32.7421 29.0151 33.1075C28.932 33.4137 28.7901 33.7294 28.6078 34.0264C28.9121 33.9067 29.2345 33.7757 29.5736 33.6377L29.6362 33.6122C31.0135 33.0518 32.6654 32.3796 34.1289 32.1395C35.8285 31.8607 37.1038 32.4708 37.6871 33.5999C38.2008 34.5942 38.0863 35.906 37.3018 36.7039C37.1053 36.9037 36.8128 37.1074 36.5317 37.2882C36.2283 37.4834 35.8559 37.703 35.444 37.9348C34.6187 38.399 33.5981 38.932 32.5748 39.4468C30.5517 40.4644 28.422 41.4586 27.7384 41.7069C26.5522 42.1378 25.18 42.0002 23.9608 41.878C23.9184 41.8738 23.8762 41.8695 23.8341 41.8654C23.4662 41.8287 23.1003 41.7923 22.7262 41.7641C21.0662 41.6394 19.7937 41.2383 18.6316 40.8719L18.6073 40.8643C17.3565 40.4699 16.2308 40.1186 14.7185 40.0582C14.3865 40.045 13.4927 40.0695 12.631 40.1009C12.2113 40.1161 11.8148 40.1323 11.523 40.1448C11.3772 40.151 11.2578 40.1562 11.1748 40.1599L11.0464 40.1657L10 40.2138V31.2781L10.8774 30.987C11.0006 30.946 11.1776 30.8869 11.3925 30.8149C11.8224 30.6709 12.4035 30.4752 13.009 30.2685C14.2527 29.8438 15.5069 29.4033 15.849 29.2487C16.2158 29.0828 16.6326 29.029 16.9673 29.0098C17.322 28.9895 17.6878 29.0036 18.0056 29.028C18.3265 29.0526 18.6174 29.0893 18.8272 29.1196C18.9327 29.1348 19.0191 29.1486 19.0802 29.1588C19.1107 29.1639 19.135 29.1681 19.1523 29.1711L19.173 29.1748L19.1792 29.1759L19.1812 29.1763L19.1825 29.1766C19.1827 29.1766 19.1825 29.1766 19.0007 30.1599Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.1508 13.2408C35.5701 13.6002 35.6187 14.2315 35.2593 14.6509C32.279 18.1279 28.5682 23.2251 26.9299 27.3678C26.7268 27.8814 26.1458 28.1331 25.6323 27.93C25.1187 27.7269 24.867 27.1459 25.0701 26.6323C26.8334 22.1734 30.721 16.8723 33.7407 13.3493C34.1002 12.9299 34.7315 12.8814 35.1508 13.2408Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3809 16.4484C14.9472 16.7903 14.8728 17.4191 15.2147 17.8528C17.4574 20.6975 19.9044 24.3393 21.0667 27.3593C21.2651 27.8747 21.8438 28.1317 22.3592 27.9333C22.8746 27.7349 23.1316 27.1563 22.9333 26.6409C21.6615 23.3365 19.0648 19.506 16.7853 16.6146C16.4434 16.1809 15.8146 16.1065 15.3809 16.4484Z" fill="#333333"/>
<path d="M6 29.0001H12V42.0001H6V29.0001Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}