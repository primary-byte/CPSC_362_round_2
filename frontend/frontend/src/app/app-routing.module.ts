import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const classesModule = () => import('./classes/classes.module').then(x => x.ClassesModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);
const questionsModule = () => import('./questions/questions.module').then(x => x.QuestionsModule);
const studygroupsModule = () => import('./studygroups/studygroups.module').then(x => x.StudyGroupsModule);
const teacherreviewModule = () => import('./teacherreview/teacherreview.module').then(x => x.TeacherReviewModule);
const thotsModule = () => import('./thots/thots.module').then(x => x.ThotsModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'classes', loadChildren: classesModule, canActivate: [AuthGuard] },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'questions', loadChildren: questionsModule, canActivate: [AuthGuard] },
    { path: 'studygroups', loadChildren: studygroupsModule, canActivate: [AuthGuard] },
    { path: 'teacherreview', loadChildren: teacherreviewModule, canActivate: [AuthGuard] },
    { path: 'thots', loadChildren: thotsModule, canActivate: [AuthGuard] },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }