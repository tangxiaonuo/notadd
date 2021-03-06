import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm'
import { AddonEntity } from './addon.entity';
import { UserEntity } from './user.entity';
import { RoleEntity } from './role.entity';


@Entity({
    name: 'permission'
})
export class PermissionEntity {

    @PrimaryGeneratedColumn()
    permission_id: number;

    @Column()
    pid: number;

    @Column()
    name: string;

    @Column({
        type: 'smallint'
    })
    type: 1|2|3;

    @Column()
    value: string;

    @Column()
    icon: string;

    @Column({
        type: 'smallint',
    })
    status: -1|1;

    @Column({
        type: 'int',
    })
    displayorder: number;

    @CreateDateColumn({
        type: 'timestamp'
    })
    create_time: Date = new Date();

    @UpdateDateColumn({
        type: 'timestamp'
    })
    update_time: Date= new Date();


    /**
     * 常用的，所以定义一下，查询后挂载到Permission上
     */

    /**
     * 某个权限下面的所有应用
     */
    addons: AddonEntity[];

    /**
     * 某个权限下面的用户
     */
    users: UserEntity[];

    /**
     * 某个权限下面的角色
     */
    roles: RoleEntity[];

}
